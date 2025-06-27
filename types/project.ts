export interface Project {
  table_element_date: null;
  description: string;
  title: string;
  dateo: null;
  date_start: number;
  datee: null;
  date_end: string;
  date_start_event: string;
  date_end_event: string;
  location: string;
  date_close: string;
  socid: null;
  thirdparty_name: null;
  user_author_id: string;
  fk_user_close: null;
  user_close_id: null;
  public: string;
  budget_amount: string;
  usage_opportunity: number;
  usage_task: number;
  usage_bill_time: number;
  usage_organize_event: number;
  accept_conference_suggestions: number;
  accept_booth_suggestions: number;
  price_registration: null;
  price_booth: null;
  max_attendees: null;
  statut: string;
  opp_status: string;
  opp_status_code: string;
  opp_status_label: string;
  fk_opp_status: null;
  opp_amount: string;
  opp_percent: string | null;
  opp_weighted_amount: null;
  email_msgid: null;
  weekWorkLoadPerTask: null;
  date_c: number;
  date_m: number;
  lines: null;
  photo: string;
  photo_url: string;
  photo_small_url: string;
  photo_mini_url: string;
  header_photo: null;
  header_photo_url: null;
  profiles: Profile[];
  profiles_count_remains: number;
  module: null;
  id: string;
  entity: string;
  import_key: null;
  array_options: ArrayOptions;
  array_languages: null;
  contacts_ids: string[];
  linked_objects: null;
  linkedObjectsIds: null;
  oldref: null;
  canvas: null;
  fk_project: null;
  contact_id: null;
  user: null;
  origin: null;
  origin_id: null;
  ref: string;
  ref_ext: null;
  status: string;
  state_id: null;
  region_id: null;
  demand_reason_id: null;
  transport_mode_id: null;
  shipping_method: null;
  multicurrency_code: null;
  multicurrency_tx: null;
  model_pdf: null;
  last_main_doc: null;
  last_main_doc_url: null;
  fk_bank: null;
  note_public: null;
  note_private: null;
  date_creation: null;
  date_validation: null;
  date_modification: null;
  date_update: null;
  date_cloture: null;
  user_author: null;
  user_creation: null;
  user_creation_id: null;
  user_valid: null;
  user_validation: null;
  user_validation_id: null;
  user_closing_id: null;
  user_modification: null;
  user_modification_id: string;
  specimen: number;
  labelStatus: null;
  showphoto_on_popup: null;
  nb: any[];
  output: null;
  extraparams: any[];
  categories: Category[];
}

export interface ArrayOptions {
  options_proj_localisation: OptionsProjLocalisation;
  options_proj_lieurealisation: string[];
  options_proj_theme_pple: OptionsProjThemePple[];
  options_proj_beneficiaires: string;
  options_proj_duree: string;
  options_proj_recolte: string;
  options_proj_objectif: string;
  options_proj_partenairetech: string;
  options_proj_partenairefin: string;
  options_proj_partenairesloc: string;
  options_proj_programme: string;
  options_proj_axeprogramme: string;
  options_proj_contexte: string;
  options_proj_objectifprojet: string;
  options_proj_descr_miseenoeuvre: string;
  options_proj_resultat: string;
  options_oddphoto: string;
  options_proj_iconindicateurscles_1: string;
  options_proj_indicateurscles_1: string;
  options_proj_iconindicateurscles_2: null;
  options_proj_indicateurscles_2: null;
  options_proj_iconindicateurscles_3: null;
  options_proj_indicateurscles_3: null;
  options_proj_iconindicateurscles_4: null;
  options_proj_indicateurscles_4: null;
  options_proj_iconindicateurscles_5: null;
  options_proj_indicateurscles_5: null;
}

export interface OptionsProjLocalisation {
  code: string;
  label: string;
}

export interface OptionsProjThemePple {
  id: number;
  label: string;
  color: string;
}

export interface Category {
  id: string;
  label: string;
  color: string;
}

export interface Profile {
  id: number;
  ref: string;
  date_carbone_killer: string;
  lieu: string;
  profession: string;
  firstname: string;
  lastname: string | null;
  photo_url: string | null;
  photo_mini_url: string | null;
  photo_small_url: string | null;
  display_name: '0' | '1';
  customer_type: 1 | 2 | 3;
  company_name: string | null;
}
