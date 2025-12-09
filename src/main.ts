import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { subDays, isAfter } from 'date-fns';
import { jobOffers } from '../data/data-job-offer';

const app = document.getElementById('app');
if (!app) throw new Error('Element #app not found');

let searchTerm = '';
let selectedLocations = new Set<string>();
let dateFilter: 'all' | '4weeks' | '1month' | '3months' = '3months';

function render() {
  const now = new Date();
  const filtered = jobOffers.filter(job => {
    const matchesSearch = searchTerm === '' ||
      job.title.toLowerCase().includes(searchTerm) ||
      job.skills.some(s => s.toLowerCase().includes(searchTerm));

    const matchesLocation = selectedLocations.size === 0 || selectedLocations.has(job.location);

    const minDate = dateFilter === '4weeks' ? subDays(now, 28)
                  : dateFilter === '1month' ? subDays(now, 30)
                  : dateFilter === '3months' ? subDays(now, 90)
                  : new Date(0);
    const matchesDate = isAfter(job.publishedAt, minDate);

    return matchesSearch && matchesLocation && matchesDate;
  });

  app.innerHTML = `
    <div class="max-w-7xl mx-auto p-6">
      <h1 class="text-4xl font-bold mb-8 text-gray-900">Offres d'emploi</h1>

      <div class="bg-white border rounded-lg p-6 mb-8 shadow-sm">
        <div class="grid md:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Recherche (titre / compétence)</label>
            <input type="text" id="search" placeholder="ex: React, Product Owner…" 
                   class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                   value="${searchTerm}">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
            <div class="space-y-2">
              ${(['Paris', 'Bordeaux', 'Marseille'] as const).map(loc => `
                <label class="flex items-center">
                  <input type="checkbox" value="${loc}" ${selectedLocations.has(loc) ? 'checked' : ''} 
                         class="mr-2 h-4 w-4 text-blue-600 rounded focus:ring-blue-500">
                  <span>${loc}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Date de publication</label>
            <select id="dateFilter" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option value="3months" ${dateFilter==='3months'?'selected':''}>3 derniers mois</option>
              <option value="1month" ${dateFilter==='1month'?'selected':''}>Dernier mois</option>
              <option value="4weeks" ${dateFilter==='4weeks'?'selected':''}>Dernières 4 semaines</option>
              <option value="all" ${dateFilter==='all'?'selected':''}>Toutes les dates</option>
            </select>
          </div>
        </div>
      </div>

      <div class="text-gray-700 mb-4">${filtered.length} offre${filtered.length > 1 ? 's' : ''} trouvée${filtered.length > 1 ? 's' : ''}</div>

      ${filtered.length === 0 ? `
        <div class="text-center py-12 text-gray-500">
          Aucune offre ne correspond à vos critères.
        </div>
      ` : `
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          ${filtered.map(job => `
            <div class="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow bg-white">
              <h2 class="text-xl font-semibold text-gray-900">${job.title}</h2>
              <p class="text-sm text-gray-600 mt-2">
                ${job.location} • ${format(job.publishedAt, 'dd MMMM yyyy', { locale: fr })}
              </p>
              <div class="flex flex-wrap gap-2 mt-4">
                ${job.skills.slice(0, 4).map(s => 
                  `<span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">${s}</span>`
                ).join('')}
                ${job.skills.length > 4 ? `<span class="text-xs text-gray-500 ml-1">+${job.skills.length - 4}</span>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  `;

  document.getElementById('search')?.addEventListener('input', (e) => {
    searchTerm = (e.target as HTMLInputElement).value.toLowerCase();
    render();
  });

  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const value = (e.target as HTMLInputElement).value;
      if ((e.target as HTMLInputElement).checked) {
        selectedLocations.add(value);
      } else {
        selectedLocations.delete(value);
      }
      render();
    });
  });

  document.getElementById('dateFilter')?.addEventListener('change', (e) => {
    dateFilter = (e.target as HTMLSelectElement).value as any;
    render();
  });
}

render();