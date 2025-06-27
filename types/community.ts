import { ArrayOptions } from "./project";

export interface SimpleCommunity {
    id: string;
    lastname: string;
    firstname: string;
    display_name: 1 | 0;
    customer_type: 1 | 2 | 3;
    company_name: string | null;
}

export interface PaginatedProfile {
    data: CommunityProfilDetails[];
    pagination: {
        current_page: number;
        per_page: number;
        total_items: number;
        total_pages: number;
        has_next: boolean;
        has_previous: boolean;
        first_item: number;
        last_item: number;
    }
}

export interface CommunityProfilDetails {
    company_name:         string | null;
    module:               string;
    ref:                  string;
    firstname:            string;
    lastname:             string | null;
    phone:                string;
    email:                string;
    address:              string;
    rue:                  string;
    zip:                  string;
    town:                 string;
    country_code:         string;
    customer_type:        1 | 2 | 3;
    fk_categories:        string;
    date_carbone_killer:  string;
    lieu:                 string;
    profession:           string;
    motCles:              string;
    url:                  string;
    priorite_climatique:  string;
    bio:                  string;
    declic_climatique:    string;
    date_last_activity:   string;
    nombre_orders:        null;
    fk_project:           string;
    fk_soc:               null;
    photo:                string;
    description:          null;
    note_public:          null;
    note_private:         null;
    date_creation:        number;
    tms:                  number;
    fk_user_author:       number;
    fk_user_modif:        number;
    last_main_doc:        string;
    import_key:           string;
    model_pdf:            null;
    status:               number;
    id:                   number;
    entity:               null;
    array_options:        any[];
    array_languages:      null;
    contacts_ids:         null;
    linked_objects:       null;
    linkedObjectsIds:     null;
    display_name:         '0' | '1';
    oldref:               null;
    contact_id:           null;
    user:                 null;
    origin:               null;
    origin_id:            null;
    ref_ext:              null;
    statut:               null;
    country_id:           null;
    state_id:             null;
    region_id:            null;
    barcode_type:         null;
    barcode_type_coder:   null;
    mode_reglement_id:    null;
    cond_reglement_id:    null;
    demand_reason_id:     null;
    transport_mode_id:    null;
    shipping_method_id:   null;
    shipping_method:      null;
    multicurrency_code:   null;
    multicurrency_tx:     null;
    last_main_doc_url:    null;
    fk_bank:              null;
    fk_account:           null;
    total_ht:             null;
    total_tva:            null;
    total_localtax1:      null;
    total_localtax2:      null;
    total_ttc:            null;
    lines:                null;
    name:                 null;
    civility_id:          null;
    date_validation:      null;
    date_modification:    null;
    date_update:          null;
    date_cloture:         null;
    user_author:          null;
    user_creation:        null;
    user_creation_id:     null;
    user_valid:           null;
    user_validation:      null;
    user_validation_id:   null;
    user_closing_id:      null;
    user_modification:    null;
    user_modification_id: null;
    specimen:             number;
    sexe:                 0 | 1 | null;
    labelStatus:          null;
    showphoto_on_popup:   null;
    nb:                   any[];
    output:               null;
    extraparams:          any[];
    photo_url:            string | null;
    photo_small_url:      string | null;
    photo_mini_url:       string | null;
    projetsSoutenus:      ProjetsSoutenu[];
    categories:           string[];
    catched_carbon:       string | null;
    restored_biodiversity:string | null;
    climatic_influence_citoyen:   number | null;
    climatic_influence_entreprise:   number | null;
}

export interface ProjetsSoutenu {
    id:               string;
    title:            string;
    description:      string;
    location:         string;
    photo_url:        string | null;
    photo_small_url:  string | null;
    opp_status_label: string | null;
    opp_percent:      string | null;
    opp_amount:       string | null;
    categories:       Category[];
    array_options:    ArrayOptions;
    profiles:         Profile[];
    profiles_count_remains: number;
}
export interface OptionsProjLocalisation {
    code:  string;
    label: string;
}

export interface OptionsProjThemePple {
    id:    number;
    label: string;
    color: string;
}

export interface Category {
    id:    string;
    label: string;
    color: string;
}

export interface Profile {
    id:                  number;
    ref:                 string;
    date_carbone_killer: string;
    lieu:                string;
    profession:          string;
    firstname:           string;
    lastname:            string | null;
    photo_url:           string | null;
    photo_mini_url:      string | null;
    photo_small_url:     string | null;
    display_name:        '0' | '1';
    customer_type:       1 | 2 | 3;
    company_name:       string | null;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toCommunityProfilDetails(json: string): CommunityProfilDetails {
        return cast(JSON.parse(json), r("CommunityProfilDetails"));
    }

    public static communityProfilDetailsToJson(value: CommunityProfilDetails): string {
        return JSON.stringify(uncast(value, r("CommunityProfilDetails")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "CommunityProfilDetails": o([
        { json: "module", js: "module", typ: "" },
        { json: "ref", js: "ref", typ: "" },
        { json: "firstname", js: "firstname", typ: "" },
        { json: "lastname", js: "lastname", typ: "" },
        { json: "phone", js: "phone", typ: "" },
        { json: "email", js: "email", typ: "" },
        { json: "address", js: "address", typ: "" },
        { json: "rue", js: "rue", typ: "" },
        { json: "zip", js: "zip", typ: "" },
        { json: "town", js: "town", typ: "" },
        { json: "country_code", js: "country_code", typ: "" },
        { json: "customer_type", js: "customer_type", typ: 0 },
        { json: "fk_categories", js: "fk_categories", typ: "" },
        { json: "date_carbone_killer", js: "date_carbone_killer", typ: "" },
        { json: "lieu", js: "lieu", typ: "" },
        { json: "profession", js: "profession", typ: "" },
        { json: "motCles", js: "motCles", typ: "" },
        { json: "url", js: "url", typ: "" },
        { json: "priorite_climatique", js: "priorite_climatique", typ: "" },
        { json: "bio", js: "bio", typ: "" },
        { json: "declic_climatique", js: "declic_climatique", typ: "" },
        { json: "date_last_activity", js: "date_last_activity", typ: 0 },
        { json: "nombre_orders", js: "nombre_orders", typ: null },
        { json: "fk_project", js: "fk_project", typ: "" },
        { json: "fk_soc", js: "fk_soc", typ: null },
        { json: "photo", js: "photo", typ: "" },
        { json: "description", js: "description", typ: null },
        { json: "note_public", js: "note_public", typ: null },
        { json: "note_private", js: "note_private", typ: null },
        { json: "date_creation", js: "date_creation", typ: 0 },
        { json: "tms", js: "tms", typ: 0 },
        { json: "fk_user_author", js: "fk_user_author", typ: 0 },
        { json: "fk_user_modif", js: "fk_user_modif", typ: 0 },
        { json: "last_main_doc", js: "last_main_doc", typ: "" },
        { json: "import_key", js: "import_key", typ: "" },
        { json: "model_pdf", js: "model_pdf", typ: null },
        { json: "status", js: "status", typ: 0 },
        { json: "id", js: "id", typ: 0 },
        { json: "entity", js: "entity", typ: null },
        { json: "array_options", js: "array_options", typ: a("any") },
        { json: "array_languages", js: "array_languages", typ: null },
        { json: "contacts_ids", js: "contacts_ids", typ: null },
        { json: "linked_objects", js: "linked_objects", typ: null },
        { json: "linkedObjectsIds", js: "linkedObjectsIds", typ: null },
        { json: "oldref", js: "oldref", typ: null },
        { json: "contact_id", js: "contact_id", typ: null },
        { json: "user", js: "user", typ: null },
        { json: "origin", js: "origin", typ: null },
        { json: "origin_id", js: "origin_id", typ: null },
        { json: "ref_ext", js: "ref_ext", typ: null },
        { json: "statut", js: "statut", typ: null },
        { json: "country_id", js: "country_id", typ: null },
        { json: "state_id", js: "state_id", typ: null },
        { json: "region_id", js: "region_id", typ: null },
        { json: "barcode_type", js: "barcode_type", typ: null },
        { json: "barcode_type_coder", js: "barcode_type_coder", typ: null },
        { json: "mode_reglement_id", js: "mode_reglement_id", typ: null },
        { json: "cond_reglement_id", js: "cond_reglement_id", typ: null },
        { json: "demand_reason_id", js: "demand_reason_id", typ: null },
        { json: "transport_mode_id", js: "transport_mode_id", typ: null },
        { json: "shipping_method_id", js: "shipping_method_id", typ: null },
        { json: "shipping_method", js: "shipping_method", typ: null },
        { json: "multicurrency_code", js: "multicurrency_code", typ: null },
        { json: "multicurrency_tx", js: "multicurrency_tx", typ: null },
        { json: "last_main_doc_url", js: "last_main_doc_url", typ: null },
        { json: "fk_bank", js: "fk_bank", typ: null },
        { json: "fk_account", js: "fk_account", typ: null },
        { json: "total_ht", js: "total_ht", typ: null },
        { json: "total_tva", js: "total_tva", typ: null },
        { json: "total_localtax1", js: "total_localtax1", typ: null },
        { json: "total_localtax2", js: "total_localtax2", typ: null },
        { json: "total_ttc", js: "total_ttc", typ: null },
        { json: "lines", js: "lines", typ: null },
        { json: "name", js: "name", typ: null },
        { json: "civility_id", js: "civility_id", typ: null },
        { json: "date_validation", js: "date_validation", typ: null },
        { json: "date_modification", js: "date_modification", typ: null },
        { json: "date_update", js: "date_update", typ: null },
        { json: "date_cloture", js: "date_cloture", typ: null },
        { json: "user_author", js: "user_author", typ: null },
        { json: "user_creation", js: "user_creation", typ: null },
        { json: "user_creation_id", js: "user_creation_id", typ: null },
        { json: "user_valid", js: "user_valid", typ: null },
        { json: "user_validation", js: "user_validation", typ: null },
        { json: "user_validation_id", js: "user_validation_id", typ: null },
        { json: "user_closing_id", js: "user_closing_id", typ: null },
        { json: "user_modification", js: "user_modification", typ: null },
        { json: "user_modification_id", js: "user_modification_id", typ: null },
        { json: "specimen", js: "specimen", typ: 0 },
        { json: "labelStatus", js: "labelStatus", typ: null },
        { json: "showphoto_on_popup", js: "showphoto_on_popup", typ: null },
        { json: "nb", js: "nb", typ: a("any") },
        { json: "output", js: "output", typ: null },
        { json: "extraparams", js: "extraparams", typ: a("any") },
        { json: "photo_url", js: "photo_url", typ: "" },
        { json: "photo_small_url", js: "photo_small_url", typ: "" },
        { json: "photo_mini_url", js: "photo_mini_url", typ: "" },
        { json: "projetsSoutenus", js: "projetsSoutenus", typ: a(r("ProjetsSoutenu")) },
        { json: "categories", js: "categories", typ: a("") },
    ], false),
    "ProjetsSoutenu": o([
        { json: "id", js: "id", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "location", js: "location", typ: "" },
        { json: "photo_url", js: "photo_url", typ: "" },
        { json: "photo_small_url", js: "photo_small_url", typ: "" },
        { json: "opp_status_label", js: "opp_status_label", typ: "" },
        { json: "opp_percent", js: "opp_percent", typ: "" },
        { json: "opp_amount", js: "opp_amount", typ: "" },
        { json: "categories", js: "categories", typ: a(r("Category")) },
        { json: "array_options", js: "array_options", typ: r("ArrayOptions") },
        { json: "profiles", js: "profiles", typ: a(r("Profile")) },
    ], false),
    "ArrayOptions": o([
        { json: "options_proj_localisation", js: "options_proj_localisation", typ: r("OptionsProjLocalisation") },
        { json: "options_proj_lieurealisation", js: "options_proj_lieurealisation", typ: a("") },
        { json: "options_proj_theme_pple", js: "options_proj_theme_pple", typ: a(r("OptionsProjThemePple")) },
        { json: "options_proj_beneficiaires", js: "options_proj_beneficiaires", typ: "" },
        { json: "options_proj_duree", js: "options_proj_duree", typ: "" },
        { json: "options_proj_recolte", js: "options_proj_recolte", typ: "" },
        { json: "options_proj_objectif", js: "options_proj_objectif", typ: "" },
        { json: "options_proj_partenairetech", js: "options_proj_partenairetech", typ: "" },
        { json: "options_proj_partenairefin", js: "options_proj_partenairefin", typ: "" },
        { json: "options_proj_partenairesloc", js: "options_proj_partenairesloc", typ: "" },
        { json: "options_proj_programme", js: "options_proj_programme", typ: "" },
        { json: "options_proj_axeprogramme", js: "options_proj_axeprogramme", typ: "" },
        { json: "options_proj_contexte", js: "options_proj_contexte", typ: "" },
        { json: "options_proj_objectifprojet", js: "options_proj_objectifprojet", typ: "" },
        { json: "options_proj_descr_miseenoeuvre", js: "options_proj_descr_miseenoeuvre", typ: "" },
        { json: "options_proj_resultat", js: "options_proj_resultat", typ: "" },
        { json: "options_oddphoto", js: "options_oddphoto", typ: "" },
        { json: "options_proj_iconindicateurscles_1", js: "options_proj_iconindicateurscles_1", typ: "" },
        { json: "options_proj_indicateurscles_1", js: "options_proj_indicateurscles_1", typ: "" },
        { json: "options_proj_iconindicateurscles_2", js: "options_proj_iconindicateurscles_2", typ: null },
        { json: "options_proj_indicateurscles_2", js: "options_proj_indicateurscles_2", typ: null },
        { json: "options_proj_iconindicateurscles_3", js: "options_proj_iconindicateurscles_3", typ: null },
        { json: "options_proj_indicateurscles_3", js: "options_proj_indicateurscles_3", typ: null },
        { json: "options_proj_iconindicateurscles_4", js: "options_proj_iconindicateurscles_4", typ: null },
        { json: "options_proj_indicateurscles_4", js: "options_proj_indicateurscles_4", typ: null },
        { json: "options_proj_iconindicateurscles_5", js: "options_proj_iconindicateurscles_5", typ: null },
        { json: "options_proj_indicateurscles_5", js: "options_proj_indicateurscles_5", typ: null },
    ], false),
    "OptionsProjLocalisation": o([
        { json: "code", js: "code", typ: "" },
        { json: "label", js: "label", typ: "" },
    ], false),
    "OptionsProjThemePple": o([
        { json: "id", js: "id", typ: 0 },
        { json: "label", js: "label", typ: "" },
        { json: "color", js: "color", typ: "" },
    ], false),
    "Category": o([
        { json: "id", js: "id", typ: "" },
        { json: "label", js: "label", typ: "" },
        { json: "color", js: "color", typ: "" },
    ], false),
    "Profile": o([
        { json: "id", js: "id", typ: 0 },
        { json: "ref", js: "ref", typ: "" },
        { json: "date_carbone_killer", js: "date_carbone_killer", typ: "" },
        { json: "lieu", js: "lieu", typ: "" },
        { json: "profession", js: "profession", typ: "" },
        { json: "firstname", js: "firstname", typ: "" },
        { json: "lastname", js: "lastname", typ: "" },
        { json: "photo_url", js: "photo_url", typ: "" },
        { json: "photo_mini_url", js: "photo_mini_url", typ: "" },
        { json: "photo_small_url", js: "photo_small_url", typ: "" },
    ], false),
};

export interface CommunityCategory {
    module:                    null;
    id:                        string;
    entity:                    number;
    import_key:                null;
    array_options:             any[];
    array_languages:           null;
    contacts_ids:              null;
    linked_objects:            null;
    linkedObjectsIds:          null;
    oldref:                    null;
    origin:                    null;
    origin_id:                 null;
    ref:                       null;
    ref_ext:                   null | string;
    status:                    null;
    state_id:                  null;
    region_id:                 null;
    demand_reason_id:          null;
    transport_mode_id:         null;
    shipping_method:           null;
    multicurrency_code:        null;
    multicurrency_tx:          null;
    model_pdf:                 null;
    last_main_doc:             null;
    last_main_doc_url:         null;
    fk_bank:                   null;
    note_public:               null;
    note_private:              null;
    date_creation:             number;
    date_validation:           null;
    date_modification:         number;
    date_update:               null;
    date_cloture:              null;
    user_author:               null;
    user_creation:             number;
    user_creation_id:          number;
    user_valid:                null;
    user_validation:           null;
    user_validation_id:        null;
    user_closing_id:           null;
    user_modification:         number;
    user_modification_id:      number;
    specimen:                  number;
    labelStatus:               null;
    showphoto_on_popup:        null;
    nb:                        any[];
    output:                    null;
    extraparams:               any[];
    fk_parent:                 number;
    label:                     string;
    description:               string;
    color:                     string;
    visible:                   number;
    type:                      number;
    childs:                    any[];
    ARRAY_CATEGORIES_PRODUCTS: { [key: string]: number[] };
}
