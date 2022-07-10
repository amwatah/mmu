import { writable } from 'svelte/store';

type Faculty = {
	facultyTitle: string;
	programmes: string[];
};
type userDetails = {
	course: string;
	created?: any;
	faculty: string;
	name: string;
	registrationNo: string;
	verified?: boolean;
	year: string;
	password?: string
	user?:"student"|"tutor"
};

export const loggedIn = writable(false);
export const userDetails = writable<userDetails | undefined>();
export const faculties = writable<Faculty[]>([
	{
		facultyTitle: 'Faculty of Science and Technology',
		programmes: [
			'BACHELOR OF SCIENCE IN ACTUARIAL SCIENCE',
			'BACHELOR OF SCIENCE IN INDUSTRIAL CHEMISTRY',
			'BACHELOR OF SCIENCE IN ANALYTICAL CHEMISTRY',
			'BACHELOR OF SCIENCE (INSTRUMENTATION & CONTROL)',
			'BACHELOR OF SCIENCE IN MATHEMATICS AND COMPUTER SCIENCE',
			'BACHELOR OF SCIENCE IN APPLIED OPTICS AND LASERS',
			'BACHELOR OF SCIENCE IN RENEWABLE ENERGY AND TECHNOLOGY',
			'BACHELOR OF SCIENCE IN APPLIED PHYSICS AND COMPUTER SCIENCE',
			'BACHELOR OF SCIENCE IN INDUSTRIAL CHEMISTRY',
			'BACHELOR OF SCIENCE IN ANALYTICAL CHEMISTRY'
		]
	},
	{
		facultyTitle: 'Faculty of Media and Communication',
		programmes: [
			'BACHELOR OF JOURNALISM',
			'BACHELOR OF APPLIED COMMUNICATION',
			'BACHELOR OF FILM AND ANIMATION'
		]
	},
	{
		facultyTitle: 'Faculty of Business and Economics',
		programmes: [
			'BACHELOR OF COMMERCE',
			'BACHELOR OF SCIENCE IN ECONOMICS',
			'BACHELOR OF BUSINESS INFORMATION TECHNOLOGY	',
			'BACHELOR OF PROCUREMENT AND LOGISTICS MANAGEMENT',
			'BACHELOR OF COMMERCE'
		]
	},
	{
		facultyTitle: 'Faculty of Engineering & Technology',
		programmes: [
			'BACHELOR OF SCIENCE IN CIVIL ENGINEERING',
			'BACHELOR OF SCIENCE IN MECHANICAL AND MANUFACTURING ENGINEERING',
			'BACHELOR OF SCIENCE IN ELECTRICAL AND TELECOMMUNICATION ENGINEERING'
		]
	},
	{
		facultyTitle: 'Faculty of Computing and Information Technology (CIT)',
		programmes: [
			'BACHELOR OF SCIENCE IN COMPUTER SCIENCE',
			'BACHELOR OF SCIENCE (COMPUTER TECHNOLOGY)',
			'BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY',
			'BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING'
		]
	},
	{
		facultyTitle: 'Faculty of Social Sciences and Technology',
		programmes: ['BACHELOR OF ARTS (PSYCHOLOGY, SOCIOLOGY & POLITICAL SCIENCE)']
	}
]);
