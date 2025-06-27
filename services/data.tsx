import { CommunityCategory, CommunityProfilDetails, PaginatedProfile, Profile, Profile as ProfileType, SimpleCommunity } from '@/types/community';
import { Contribution } from '@/types/contribution';
import { Project } from '@/types/project';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
const API_KEY = process.env.NEXT_PUBLIC_DOLAPIKEY;

const headers: Record<string, string> = {
  'Accept': 'application/json',
  'DOLAPIKEY': API_KEY as string,
  'Authorization': API_KEY as string,
};

function buildQuery(params: Record<string, any>) {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .filter((k) => params[k] !== undefined && params[k] !== '')
    .map((k) => esc(k) + '=' + esc(params[k]))
    .join('&');
}

export const fetchCommunitiesByProject = async (id: string | number, limit: number = 15): Promise<CommunityProfilDetails[]> => {
  try {
    const params = buildQuery({ limit });
    const response = await fetch(
      `${API_URL}/projects/contributorsbyidproject/${id}?${params}`,
      { headers }
    );
    if (!response.ok) throw new Error('Erreur lors de la récupération des communautés');
    return response.json();
  } catch (error: any) {
    console.error('Erreur lors de la récupération des communautés :', error);
    throw error;
  }
}

export const fetchProjects = async (limit:number = 100): Promise<Project[]> => {
  try {
    const params = buildQuery({
      sortfield: 't.fk_opp_status',
      sortorder: 'ASC',
      limit
    });
    const response = await fetch(
      `${API_URL}/projects?${params}`,
      { headers }
    );
    if (!response.ok) throw new Error('Erreur lors de la récupération des projets');
    return response.json();
  } catch (error) {
    console.error('Erreur lors de la récupération des projets :', error);
    throw error;
  }
};

export const fetchProjectById = async (id: string): Promise<Project> => {
  try {
    const response = await fetch(
      `${API_URL}/projects/${id}`,
      { headers }
    );
    if (!response.ok) throw new Error(`Erreur lors de la récupération du projet avec l'ID ${id}`);
    return response.json();
  } catch (error) {
    console.error(`Erreur lors de la récupération du projet avec l'ID ${id} :`, error);
    throw error;
  }
};

export const fetchCommunityByProjectId = async (id: number, limit: number = 10): Promise<CommunityProfilDetails[]> => {
  try {
    const params = buildQuery({ limit });
    const response = await fetch(
      `${API_URL}/projects/${id}/communities?${params}`,
      { headers }
    );
    if (!response.ok) throw new Error(`Erreur lors de la récupération des communautés pour le projet avec l'ID ${id}`);
    return response.json();
  } catch (error) {
    console.error(`Erreur lors de la récupération des communautés pour le projet avec l'ID ${id} :`, error);
    throw error;
  }
}

//  communaute
export const fetchCommunauteProfile = async (per_page: number = 10, page: number = 1, search: string = '', sqlfilters: string = ''): Promise<PaginatedProfile> => {
  try {
    const params = buildQuery({
      sortfield: 't.ranking',
      sortorder: 'ASC',
      search,
      per_page,
      page: page - 1,
      sqlfilters
    });
    const response = await fetch(
      `${API_URL}/communityapi/profiles?${params}`,
      { headers }
    );
    if (!response.ok) throw new Error('Erreur lors de la récupération des profils');
    return response.json();
  } catch (error) {
    console.error('Erreur lors de la récupération des profils :', error);
    throw error;
  }
};

export const fetchLatestCommunities = async (limit: number = 3): Promise<SimpleCommunity[]> => {
  try {
    const response = await fetch(
      `${API_URL}/communityapi/profiles/simple?sortfield=t.date_last_activity&sortorder=DESC&limit=${limit}`,
      {
        headers,
        next: {
          revalidate: 60
        }
      }
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Erreur lors de la récupération des profils :', error);
    throw error;
  }
};

export const fetchCommunauteProfileById = async (id: string): Promise<any> => {
  try {
    const response = await fetch(
      `${API_URL}/communityapi/profiles/${id}`,
      { headers }
    );
    if (!response.ok) throw new Error(`Erreur lors de la récupération du projet avec l'ID ${id}`);
    return response.json();
  } catch (error) {
    console.error(`Erreur lors de la récupération du projet avec l'ID ${id} :`, error);
    throw error;
  }
};

export const fetchCategorie = async (): Promise<any> => {
  try {
    const response = await fetch(
      `${API_URL}/categories?sortfield=t.rowid&sortorder=ASC&limit=100&type=project`,
      { headers }
    );
    if (!response.ok) throw new Error(`Erreur lors de la récupération des categories`);
    return response.json();
  } catch (error) {
    console.error(`Erreur lors de la récupération des categories:`, error);
    throw error;
  }
};

export const fetchCommunauteProfileByCategory = async (): Promise<CommunityCategory[]> => {
  try {
    const response = await fetch(`${API_URL}/categories?sortfield=t.rowid&sortorder=ASC&limit=100&type=profile`, {
      headers,
      next: {
        revalidate: 60
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error(`Erreur lors de la récupération des categories:`, error);
    throw error;
  }
};

export const fetchContributions = async (limit: number = 19): Promise<Contribution[]> => {
  try {
    const params = buildQuery({
      sortfield: "t.date_creation",
      sortorder: "DESC",
      limit
    });
    const response = await fetch(
      `${API_URL}/contributionapi/contributions?${params}`,
      { headers }
    );
    if (!response.ok) throw new Error('Erreur lors de la récupération des contributions');
    return response.json();
  } catch (error) {
    console.error('Erreur lors de la récupération des contributions :', error);
    throw error;
  }
}

export const fetchContributionsByCommunityId = async (communityId: string | number): Promise<Contribution[]> => {
  try {
    const params = buildQuery({
      sqlfilters: `t.fk_community:=:${communityId}`,
      sortfield: "t.date_creation",
      sortorder: "DESC",
    });
    const response = await fetch(
      `${API_URL}/contributionapi/contributions?${params}`,
      { headers }
    );
    if (!response.ok) throw new Error('Erreur lors de la récupération des contributions');
    return response.json();
  } catch (error) {
    console.error('Erreur lors de la récupération des contributions :', error);
    throw error;
  }
}

export const fetchContributionsByProjectId = async (projectId: string | number): Promise<Contribution[]> => {
  try {
    const params = buildQuery({
      sortfield: "t.date_creation",
      sortorder: "DESC",
      sqlfilters: `t.fk_project:=:${projectId}`,
      limit: 19
    });
    const response = await fetch(
      `${API_URL}/contributionapi/contributions?${params}`,
      { headers }
    );
    if (!response.ok) throw new Error('Erreur lors de la récupération des contributions');
    return response.json();
  } catch (error) {
    console.error('Erreur lors de la récupération des contributions :', error);
    throw error;
  }
}