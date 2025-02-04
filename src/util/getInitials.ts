export default function getInitials(name: string): string {
    if (!name) return '';
    const initialsArray = name.match(/\b\w/g) || [];
    const initials = ((initialsArray.shift() || '') + (initialsArray.pop() || '')).toUpperCase();
    return initials;
}