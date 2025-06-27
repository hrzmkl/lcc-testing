export function formatTimeAgo(date: number): string {
    const now = new Date();
    const dateInMs = date.toString().length === 10 ? date * 1000 : date;
    const tms = new Date(dateInMs);
    const diff = now.getTime() - (tms.getTime() - 7200000);

    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4);
    const years = Math.floor(months / 12);

    if (minutes < 1) return "à l'instant";
    if (minutes < 60) return `il y a ${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
    if (hours < 24) return `il y a ${hours} ${hours === 1 ? 'heure' : 'heures'}`;
    if (days < 7) return `il y a ${days} ${days === 1 ? 'jour' : 'jours'}`;
    if (weeks < 5) return `il y a ${weeks} ${weeks === 1 ? 'semaine' : 'semaines'}`;
    if (months < 12) return `il y a ${months} mois`;
    return `il y a ${years} ${years === 1 ? 'an' : 'ans'}`;
}
