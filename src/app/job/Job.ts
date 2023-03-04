export class Job {
    employer_name!: string | null;
    employer_logo!: string | null;
    employer_website!: string | null;
    employer_company_type!: string | null;
    job_publisher!: string | null;
    job_is_remote!: boolean | null;
    job_posted_at_timestamp!: number | null;
    job_posted_at_datetime_utc!: string | null;
    job_city!: string | null;
    job_state!: string | null;
    job_country!: string | null;
    job_latitude!: number | null;
    job_longitude!: number | null;
    job_benefits!: string | null;
    job_google_link!: string | null;
    job_offer_expiration_datetime_utc!: string | null;
    job_offer_expiration_timestamp!: number | null;
    job_required_experience!: Object | null;
    job_required_skills!: Array<any> | string | null;
    job_required_education!: Object | null;
    job_experience_in_place_of_education!: boolean | null;
    job_min_salary!: number | null;
    job_max_salary!: number | null;
    job_salary_currency!: string | null;
    job_salary_period: string | null;
    job_highlights!: string | null | {};
    job_job_title!: string | null;
    job_title?: string | null;
    job_id!: string | null;
    job_employment_type!: string | null;
    job_apply_link!: string;
    job_description!: string | null;
  
    constructor(
      job_is_remote?: boolean | null,
      job_posted_at_timestamp?: number | null,
      job_posted_at_datetime_utc?: string | null,
      job_google_link?: string | null,
      job_offer_expiration_datetime_utc?: string | null,
      job_offer_expiration_timestamp?: number | null,
      job_experience_in_place_of_education?: boolean | null,
      job_title?: string | null,
      job_city?: string | null,
      job_state?: string | null,
      job_country?: string | null,
      job_latitude?: number | null,
      job_longitude?: number | null,
      job_benefits?: string | null,
      job_required_experience?: string | null,
      job_required_skills?: string | null,
      job_required_education?: string | null,
      job_min_salary?: number | null,
      job_max_salary?: number | null,
      job_salary_currency?: string | null,
      job_salary_period?: string | null,
      job_highlights?: string[] | null,
    ) {
      this.job_is_remote = job_is_remote ?? null;
      this.job_posted_at_timestamp = job_posted_at_timestamp ?? null;
      this.job_posted_at_datetime_utc = job_posted_at_datetime_utc ?? null;
      this.job_city = job_city ?? null;
      this.job_state = job_state ?? null;
      this.job_country = job_country ?? null;
      this.job_latitude = job_latitude ?? null;
      this.job_longitude = job_longitude ?? null;
      this.job_benefits = job_benefits ?? null;
      this.job_google_link = job_google_link ?? null;
      this.job_offer_expiration_datetime_utc = job_offer_expiration_datetime_utc ?? null;
      this.job_offer_expiration_timestamp = job_offer_expiration_timestamp ?? null;
      this.job_required_experience = job_required_experience ?? null;
      this.job_required_skills = job_required_skills ?? null;
      this.job_required_education = job_required_education ?? null;
      this.job_experience_in_place_of_education = job_experience_in_place_of_education ?? null;
      this.job_min_salary = job_min_salary ?? null;
      this.job_max_salary = job_max_salary ?? null;
      this.job_salary_currency = job_salary_currency ?? null;
      this.job_salary_period = job_salary_period ?? null;
      this.job_title = job_title ?? null;
    }
  }
  