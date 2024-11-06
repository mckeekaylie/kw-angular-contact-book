import { Education } from "./education.model";
import { WorkExperience } from "./work-experience.model";

export interface Person {
    education: Education [];
    name: string;
    workExperience: WorkExperience [];
    image: string;
}
