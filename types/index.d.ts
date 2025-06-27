declare type LeLabCardProps = {
  id: number;
  projectType: string;
  projectTypeBgColor: string;
  title: string;
  subTitle: string;
  goal: string;
  location: string;
  tag_1: string;
  tag_2: string;
  tag_3: string;
  link: string;
};

declare type CustomerType = ['Citoyens', 'Entrepries', 'ONG & Assos'];

interface SectionTwoProps {
  isMouseMoving: boolean;
}

declare type projectPageCardProps = {
  ref: string ;
  table_element_date: string | null;
  proj_descr_courte: string;
  description: string;
  title: string;
  dateo: string | null;
  date_start: number | null;
  datee: string | null;
  date_end: string;
  date_start_event: string;
  date_end_event: string;
  location: string;
  date_close: string;
  socid: string;
  thirdparty_name: string | null;
  user_author_id: string;
  fk_user_close: string | null;
  user_close_id: string | null;
  public: string;
  budget_amount: number | null;
  usage_opportunity: number;
  usage_task: number;
  usage_bill_time: number;
  usage_organize_event: number;
  accept_conference_suggestions: number;
  accept_booth_suggestions: number;
  price_registration: number | null;
  price_booth: number | null;
  max_attendees: number | null;
  status: string;
  opp_status: string | null;
  opp_status_code: string | null;
  opp_status_label: string | null;
  fk_opp_status: string | null;
  opp_amount: number | null;
  opp_percent: number | null;
  opp_weighted_amount: number | null;
  email_msgid: string | null;
  weekWorkLoadPerTask: string | null;
  date_c: number;
  date_m: number;
  lines: string | null;
  module: string | null;
  id: string;
  photo_url: string | null;
  photo_small_url : string | null;
  photo: string | null;
  entity: string;
  import_key: string | null;
  className: string | null;
  array_options: {
    [x: string]: any;
    options_proj_axeprogramme: string | null;
    options_proj_lieurealisation: {
      code: string;
      label: string;
    };
    options_proj_beneficiaires: string;
    options_proj_duree: string;
    options_proj_recolte: string;
    options_proj_objectif: string;
    options_proj_contexte: string;
    options_proj_objectifprojet: string;
    options_proj_descr_miseenoeuvre: string;
    options_proj_resultat: string;
    options_proj_indicateurscles: string;
    options_proj_theme_pple:  {
      id: string;
      label: string;
      color: string;
    }[];
  };
  categories: {
    id: string;
    label: string;
    color: string;
  }[];
  profiles: Profile[];
};

declare type Profile = {
  id:                  number;
  ref:                 string;
  date_carbone_killer: string;
  lieu:                string;
  profession:          string;
  firstname:           string;
  lastname:            string;
  photo_url:           string;
  photo_mini_url:      string | null;
  photo_small_url:     string | null;
  display_name:        '0' | '1';
}


// Timeline type
type Category = {
  name: string;
  bgcolor: string;
  color: string;
};
declare type ItemsShowingProps = {
  id?: number;
  className?: string;
  title?: ReactNode | string | null;
  date?: string;
  content?: ReactNode | string | null;
  planState?: boolean;
  isOpen?: boolean;
  countries: string[];
  codePays: string;
  categories: { name: string; bgcolor: string; color: string; }[];
} & React.HTMLAttributes<HTMLDivElement>;

// Modal type
declare type  ModalProps = {
  className?: string;
  wrapperClassName?: string;
  children?: ReactNode | string;
  show: boolean;
  onClose: () => void;
} & React.HTMLAttributes<HTMLDivElement>;
// Modal type
//
// FAQ type
declare type FaqProps = {
  questions: { question: string; answer: string;  }[]
} & React.HTMLAttributes<HTMLDivElement>;
// FAQ type

// Gouvernace type

declare type PrincipeGouvernanceProps = {
  isFaq?: boolean
} & React.HTMLAttributes<HTMLDivElement>;