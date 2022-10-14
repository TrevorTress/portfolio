import project1 from '../assets/thought-boxer.png';
import project2 from '../assets/fork-that-orc.png';
import project3 from '../assets/stand-up-rpg.png';

const ProjectCardData = [
	{
		imgsrc: project1,
		title: 'Thought Boxer',
		text: "A poll-centric social media website developed as a group project for MSU's Coding Bootcamp.",
		view: 'https://thoughtboxer.herokuapp.com/',
		source: 'https://github.com/JoelHauser/Thought-Boxer',
	},

	{
		imgsrc: project2,
		title: 'Fork That Orc',
		text: "A character-generator social media site where users can randomly generate fantasy characters. Foundation created as a group project for MSU's Coding Bootcamp",
		view: 'https://fork-that-orc.herokuapp.com/',
		source: 'https://github.com/cory-hall/fork-that-orc',
	},

	{
		imgsrc: project3,
		title: 'Stand-Up-RPG',
		text: '2D RPG made as a tongue-in-cheek homage to my passions for stand-up comedy and gameboy era video games.',
		view: 'url.com',
		source: 'https://github.com/TrevorTress/stand-up-rpg',
	},
];

export default ProjectCardData;
