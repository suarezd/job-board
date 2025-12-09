import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { subDays, isAfter } from 'date-fns';
import { jobOffers } from '../data/data-job-offer';

const jobList = document.getElementById('job-list')!;
const resultsCount = document.getElementById('results-count')!;
const noResults = document.getElementById('no-results')!;
const searchInput = document.getElementById('search') as HTMLInputElement;
const dateFilterSelect = document.getElementById('dateFilter') as HTMLSelectElement;
const locationCheckboxes = document.querySelectorAll<HTMLInputElement>('.location-checkbox');

let searchTerm = '';
let selectedLocations = new Set<string>();
let dateFilter: 'all' | '4weeks' | '1month' | '3months' = '3months';

function filterJobs() {
  const now = new Date();

  const minDate =
    dateFilter === '4weeks' ? subDays(now, 28)
    : dateFilter === '1month' ? subDays(now, 30)
    : dateFilter === '3months' ? subDays(now, 90)
    : new Date(0);

  return jobOffers.filter(job => {
    const matchesSearch =
      searchTerm === '' ||
      job.title.toLowerCase().includes(searchTerm) ||
      job.skills.some(s => s.toLowerCase().includes(searchTerm));

    const matchesLocation =
      selectedLocations.size === 0 || selectedLocations.has(job.location);

    const matchesDate = isAfter(job.publishedAt, minDate);

    return matchesSearch && matchesLocation && matchesDate;
  });
}

function renderJobs() {
  const jobs = filterJobs();

  // 🔢 Mise à jour du compteur
  resultsCount.textContent = `${jobs.length} offre${jobs.length > 1 ? 's' : ''} trouvée${jobs.length > 1 ? 's' : ''}`;

  // 🟦 Nettoyage
  jobList.innerHTML = '';

  if (jobs.length === 0) {
    noResults.classList.remove('hidden');
    return;
  }

  noResults.classList.add('hidden');

  // 🧱 Construction des cartes
  jobs.forEach(job => {
    const formattedDate = format(job.publishedAt, "d MMM yyyy", { locale: fr });

    const skillTags = job.skills
      .map(s => `<span class="skill-tag">${s}</span>`)
      .join('');

    const card = `
      <div class="job-card">
        <h2 class="job-title">${job.title}</h2>
        <div class="job-meta">
          📍 ${job.location} — date de publication : 📅 ${formattedDate}
        </div>
        <div class="skills">
          ${skillTags}
        </div>
      </div>
    `;

    jobList.innerHTML += card;
  });
}

searchInput.addEventListener('input', e => {
  searchTerm = (e.target as HTMLInputElement).value.toLowerCase();
  renderJobs();
});

dateFilterSelect.addEventListener('change', e => {
  dateFilter = (e.target as HTMLSelectElement).value as any;
  renderJobs();
});

locationCheckboxes.forEach(cb =>
  cb.addEventListener('change', e => {
    const input = e.target as HTMLInputElement;
    if (input.checked) selectedLocations.add(input.value);
    else selectedLocations.delete(input.value);
    renderJobs();
  })
);

renderJobs();
