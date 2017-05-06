import { ProjectCard } from './projectCard.jsx';

var GetProjects = function () {
    return new Promise((resolve) => {
        setTimeout(
            resolve,
            5000, 
            [new ProjectCard({
                title: 'Create legend.todo',
                description: "I'm going to create a project management app that feels like an rpg. After all " +
                "what are our larger projects but quests on our life adventure? Quests are made up of smaller missions " +
                "that represent discrete tasks that must be completed in order to complete the request. For example, " +
                "one mission to complete on the way to completing this project might be to design and create a login and " +
                "authentication screen. You can log time against missions, and optionally enter progress notes discussing " +
                "how things are going, what's working, what's not working. Of course, all these things award exp and gold. " +
                "Exp is a way to help quantify your work towards your goals. Hopefully it will serve as a motivator to make progress." +
                "Gold can be used to buy rewards, and serves as a way of allowing you to treat yourself.",
                dueDate: "04/17/18",
                timeSpent: "20.5",
                timeEstimate: "100.0",
                expReward: "50,000",
                goldReward: "2,000",
                imagePath: '../projects/Toco_toucan_closeup300x300.png',
            }),
            new ProjectCard({
                title: 'Create legend.todo',
                description: "I'm going to create a project management app that feels like an rpg. After all " +
                "what are our larger projects but quests on our life adventure? Quests are made up of smaller missions " +
                "that represent discrete tasks that must be completed in order to complete the request. For example, " +
                "one mission to complete on the way to completing this project might be to design and create a login and " +
                "authentication screen. You can log time against missions, and optionally enter progress notes discussing " +
                "how things are going, what's working, what's not working. Of course, all these things award exp and gold. " +
                "Exp is a way to help quantify your work towards your goals. Hopefully it will serve as a motivator to make progress." +
                "Gold can be used to buy rewards, and serves as a way of allowing you to treat yourself.",
                dueDate: "04/17/18",
                timeSpent: "20.5",
                timeEstimate: "100.0",
                expReward: "50,000",
                goldReward: "2,000",
                imagePath: '../projects/Toco_toucan_closeup300x300.png',
            }),
            new ProjectCard({
                title: 'Create legend.todo',
                description: "I'm going to create a project management app that feels like an rpg. After all " +
                "what are our larger projects but quests on our life adventure? Quests are made up of smaller missions " +
                "that represent discrete tasks that must be completed in order to complete the request. For example, " +
                "one mission to complete on the way to completing this project might be to design and create a login and " +
                "authentication screen. You can log time against missions, and optionally enter progress notes discussing " +
                "how things are going, what's working, what's not working. Of course, all these things award exp and gold. " +
                "Exp is a way to help quantify your work towards your goals. Hopefully it will serve as a motivator to make progress." +
                "Gold can be used to buy rewards, and serves as a way of allowing you to treat yourself.",
                dueDate: "04/17/18",
                timeSpent: "20.5",
                timeEstimate: "100.0",
                expReward: "50,000",
                goldReward: "2,000",
                imagePath: '../projects/Toco_toucan_closeup300x300.png',
            })
            ]);
    });
};

export { GetProjects };