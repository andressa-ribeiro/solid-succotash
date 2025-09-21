export const normalizeEmail = (email) =>
    (email ?? '').toString().trim().toLowerCase();

export const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizeEmail(email));

export const isNonEmpty = (value) =>
    (value ?? '').toString().trim().length > 0;

export const saveJSON = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch {
        return false;
    }
};

export const loadJSON = (key, fallback = null) => {
    try {
        const raw = localStorage.getItem(key);
        return raw == null ? fallback : JSON.parse(raw);
    } catch {
        return fallback;
    }
};
