export interface ProfileDescriptionModel {
  paragraphs: string[];
  show: boolean;
  title: string;
}

export interface ProfileModel {
  description?: ProfileDescriptionModel;
  image: string;
  name: string;
}
