import { fireEvent, render, screen } from '@testing-library/react';
import App, { THEME_STORAGE_KEY } from './App';
import { LANGUAGE_STORAGE_KEY } from './i18n';

beforeAll(() => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
});

beforeEach(() => {
  window.localStorage.clear();
  document.documentElement.removeAttribute('data-theme');
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders the main heading and visitor-critical sections', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Sibin Blessen' })).toBeInTheDocument();
  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(document.getElementById('about')).toBeInTheDocument();
  expect(document.getElementById('experience')).toBeInTheDocument();
  expect(document.getElementById('skills')).toBeInTheDocument();
  expect(document.getElementById('work')).toBeInTheDocument();
});

test('opens and closes the mobile navigation menu', () => {
  render(<App />);
  const menuButton = screen.getByRole('button', { name: 'Toggle navigation menu' });

  expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(menuButton);
  expect(menuButton).toHaveAttribute('aria-expanded', 'true');

  const aboutButtons = screen.getAllByRole('button', { name: 'About' });
  fireEvent.click(aboutButtons[aboutButtons.length - 1]);
  expect(menuButton).toHaveAttribute('aria-expanded', 'false');
});

test('scrolls to the top when the logo is clicked', () => {
  const scrollTo = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'Back to top' }));

  expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
});

test('exposes working resume, contact, and profile destinations', () => {
  render(<App />);

  const resumeLinks = screen.getAllByRole('link', { name: 'Resume' });
  expect(resumeLinks).toHaveLength(2);
  resumeLinks.forEach((link) => {
    expect(link).toHaveAttribute('href', '/docs/sibin_blessen_resume.pdf');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  const emailLinks = screen.getAllByRole('link', { name: /send email to sibin blessen/i });
  expect(emailLinks).not.toHaveLength(0);
  emailLinks.forEach((link) => {
    expect(link).toHaveAttribute('href', 'mailto:sibinblessen@gmail.com');
  });
  const profileLinks = [
    ...screen.getAllByRole('link', { name: /linkedin profile/i }),
    ...screen.getAllByRole('link', { name: /github profile/i }),
  ];
  profileLinks.forEach((link) => {
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});

test('defaults to dark mode and toggles the standalone theme switcher', () => {
  render(<App />);

  expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  expect(screen.getByRole('group', { name: 'Color theme' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Use dark mode' })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByRole('button', { name: 'Use light mode' })).toHaveAttribute('aria-pressed', 'false');

  fireEvent.click(screen.getByRole('button', { name: 'Use light mode' }));

  expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
  expect(screen.getByRole('button', { name: 'Use dark mode' })).toHaveAttribute('aria-pressed', 'false');
  expect(screen.getByRole('button', { name: 'Use light mode' })).toHaveAttribute('aria-pressed', 'true');
});

test('defaults to English and switches the recruiter journey to Danish', () => {
  const descriptionMeta = document.createElement('meta');
  descriptionMeta.name = 'description';
  document.head.appendChild(descriptionMeta);
  render(<App />);

  expect(document.documentElement).toHaveAttribute('lang', 'en');
  expect(screen.getByRole('group', { name: 'Language' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Use English' })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByRole('button', { name: 'Use Danish' })).toHaveAttribute('aria-pressed', 'false');
  expect(screen.getAllByRole('link', { name: 'Resume' })).toHaveLength(2);
  expect(screen.getByText('Email me about a role')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Use Danish' }));

  expect(document.documentElement).toHaveAttribute('lang', 'da');
  expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('da');
  expect(screen.getByRole('heading', { name: 'Erfaring' })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: 'CV' })).toHaveLength(2);
  expect(screen.getByText('Skriv til mig om en stilling')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Brug dansk' })).toHaveAttribute('aria-pressed', 'true');
  expect(document.title).toBe('Sibin Blessen | Senior softwareingeniør og Java-udvikler');
  expect(descriptionMeta).toHaveAttribute('content', expect.stringContaining('softwareingeniør'));
});

test('keeps the language selector available when the mobile menu is open', () => {
  render(<App />);
  const menuButton = screen.getByRole('button', { name: 'Toggle navigation menu' });

  fireEvent.click(menuButton);

  expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getByRole('group', { name: 'Language' })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: 'Resume' })).toHaveLength(2);
});

test('restores a valid saved language and ignores invalid saved values', () => {
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, 'da');
  const { unmount } = render(<App />);

  expect(document.documentElement).toHaveAttribute('lang', 'da');
  expect(screen.getByRole('heading', { name: 'Erfaring' })).toBeInTheDocument();
  unmount();

  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, 'fr');
  render(<App />);

  expect(document.documentElement).toHaveAttribute('lang', 'en');
  expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument();
  expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('en');
});

test('restores a valid saved theme and ignores invalid saved values', () => {
  window.localStorage.setItem(THEME_STORAGE_KEY, 'light');
  const { unmount } = render(<App />);

  expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  unmount();

  window.localStorage.setItem(THEME_STORAGE_KEY, 'sepia');
  render(<App />);

  expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
});

test('continues rendering when theme storage is unavailable', () => {
  jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
    throw new Error('storage unavailable');
  });
  jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
    throw new Error('storage unavailable');
  });

  render(<App />);

  expect(screen.getByRole('heading', { name: 'Sibin Blessen' })).toBeInTheDocument();
  expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
});
