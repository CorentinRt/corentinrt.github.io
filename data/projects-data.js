const projects = [

    /* ---- MAIN ---- */
    {
        //#region SongVoid

        id: "songvoid",
        title: "SongVoid",
        image: "images/Projects/SongVoid/T_Couverture_SongVoid.png",
        date: "January, 2026",
        details: "Solo Project | 3 months | Unity 6 | Strategy & Skirmish",
        feature: "All Gameplay mechanics - Gamefeel - Tools - Tech Art",
        categories: ["main", "home"],
        background: "images/Projects/SongVoid/T_Couverture_SongVoid.png",


        /*---- Project Page */

        logo: "images/Projects/SongVoid/T_Logo_SongVoid.png",

        description: [
            "SongVoid is a narrative-driven single-player strategy and skirmish game. It takes place in a medieval fantasy universe.",

            "Players follow the adventures of a troop of soldiers through intense tactical battles !",

            "I developed this game entirely on my own over the course of about five months, while also completing an internship at Magic Design Studios and pursuing my Master's degree.",
        
            "Although I mainly did the programming for this project, I was also able to experiment with many other areas of development."
        ],

        itch: "https://corentinrmt.itch.io/songvoid",
        
        contribution: [
            "The main objective behind the development of this project was to show what I am capable, on my own, of in terms of game programming.",

            "I therefore placed particular emphasis on the quality and polish of the game mechanics, as well as on creating a clean architecture and comprehensive systems, allowing for rapid and smooth future development and maintenance of the game.",

            "As a result, on the programming side, I was able to implement all of the gameplay mechanics, and also continue to refine my skills in other areas of programming such as graphics integration tools, level creation, dialogue graph, and much more...",
        
            "I was also able to experiment with new and very useful design patterns and develop numerous packages that can be reused in other games to improve my productivity.",

            "The mechanics I will present below do not represent everything I developed for the project, but they are the ones I find most interesting to detail.",

            "I really encourage you to try out the game if you want to see the details of my work on the project."
        ],

        gameplayVideos: [
            {
                type: "youtube",
                url: "https://www.youtube.com/embed/92H1qP9creE",
                ratio: "16 / 9"
            },

            {
                type: "youtube",
                url: "https://www.youtube.com/embed/yUicLpdnPjs",
                ratio: "16 / 9"
            }
        ],

        features: [
            //#region Features SongVoid
            {
                /* 1 */
                title: "Hexagonal Map System & Procedural Generation",

                description: [
                    "I developed a hexagonal grid map system with all that this implies (pathfinding, path cost, specific effects of certain tiles, lines of sight, etc.).",

                    "I then combined this system with a procedural generation tool that I created. Using Perlin's Noise, I can generate consistent maps very quickly, and then go back over them to refine the level design.",

                    "It also takes care of generating the scenery for each biome through easily modifiable asset lists. This saves a considerable amount of time.",

                    "Finally, I added a quick and easy-to-use weather change system so that textures, lighting, post-processing, and other map assets can be easily changed with just a few clicks.",

                    "I really enjoyed creating the systems related to the map, and I think this is reflected in the details I put in place so that it can be generated and customised in a consistent and functional way very quickly.",

                    "All the tweaking data for the generation can be modified through ScriptableObjects to avoid having to go into the code when making changes.",
                ],

                media: "images/Projects/SongVoid/SongVoid_Gifs/Gifs_Opti/SongVoid_Portfolio_MapGeneration_Gif_Opti.gif"
            },

            {
                /* 2 */
                title: "Units Behaviour",

                description: [
                    "Medieval strategy games often involve unit management. So I created an entire unit behaviour system.",

                    "Units can have specific classes (cavalry, infantry, archers, heroes, etc.), which then define their statistics, which are recorded in ScriptableObjects. Units can attack, be damaged, die, move (in relation to the map), and give bonuses to other adjacent units.",

                    "In order to have a clean architecture and facilitate future development, a 'Unit Manager' handles their initialisations, access, actions, and reactions, allowing for better management of player teams, as well as the behaviour of 'AI Controllers' (see below).",

                    "As with the map, I also had fun creating facilities for managing the units' graphic assets.",

                    "This is independent of the main behaviour of the units and saves a considerable amount of time. So, if you want to change the type of a unit or its team for testing purposes, the entire visual aspect is updated at the same time.",

                    "In addition, the visuals react to the status of the unit, such as the number of troops still alive, for example."
                ],

                media: "images/Projects/SongVoid/SongVoid_Gifs/Gifs_Opti/SongVoid_Portfolio_UnitsBehaviour_Gif_Opti.gif"
            },

            {
                /* 3 */
                title: "Fight System",

                description: [
                    "In order to make the battles more dynamic, I developed a real-time dice-rolling fight mechanic.",

                    "This involves 'Dice Data', which defines the statistics of the dice rolled, 'Tweens' and curves that allow you to draw the path taken by the dice in editor. This information can be modified in data (ScriptableObjects).",

                    "The biggest challenge here was to make the real time dice interception mechanics as satisfying as possible for the player.",

                    "I therefore paid particular attention to this aspect in order to add clear feedbacks and a pleasant game feel, notably by adding sounds and visual effects, which were made easier to implement thanks to 'Command Actions' (see above).",
                ],

                media: "images/Projects/SongVoid/SongVoid_Gifs/Gifs_Opti/SongVoid_Portfolio_FightSystem_Gif_Opti.gif"
            },

            {
                /* 4 */
                title: "Level Controller",

                description: [
                    "In order to control the flow of the level, as well as the various events that occur during it, I set up a 'Level Controller' system.",

                    "This system works using two 'Design Patterns' that I implemented in the project, 'Command Actions' and 'Progression Tracking' (see below).",

                    "Using a list of actions and conditions, which can be customised in ScriptableObjects from the editor, I can set up a timeline of upcoming events and how they should be triggered.",

                    "This includes playing sounds, displaying a tutorial window, bringing in reinforcements for a team, and even adding objectives and victory conditions (and more...).",

                    "I really enjoyed setting up this structure, and it allowed me to perfectly manage the entire level flow from the editor, which is one of my goals : to have maximum control over the game without having to go through the code once the system has been developed."
                ],

                media: "images/Projects/SongVoid/SongVoid_Gifs/Gifs_Opti/SongVoid_Portfolio_LevelController_Gif_Opti.gif"
            },

            {
                /* 5 */
                title: "Game Loop",

                description: [
                    "In order to create the Game Loop in the cleanest way possible, I had to set up a solid architecture.",

                    "This means that all my Managers are initialised in an order defined by a grand conductor (the 'Game Manager').",

                    "Level initialisation is done using data passed to ScriptableObjects, and is well organised to allow total control over game and players options.",

                    "This includes 'Campaign Data' and 'Level Data' which indicate, the name of the level, the conditions for victory, ...",
                    
                    "There is also 'Players Data' which defines player statistics such as their total activation points, their associated unit team, whether they are the first player, but also whether the associated player is controlled by an AI or not (and yes, although not present in the game demo, the system can easily make two AIs or even two players compete against each other in local multiplayer !",

                    "Everything is perfectly supported, and the game was even designed for this purpose before the integration of an 'AI Controller' and a solo experience).",

                    "Using this data, the level is then set up, and all the systems perform their tasks according to it."
                ],

                media: "images/Projects/SongVoid/SongVoid_Gifs/Gifs_Opti/SongVoid_Portfolio_GameLoop_Gif_Opti.gif"
            },

            {
                /* 6 */
                title: "AI Controller (Utility AI)",

                description: [
                    "Following my desire to offer a more solo experience so that anyone could enjoy the game without having to play as the second player, I had to create an AI system.",

                    "This is the first time I have created an AI designed to replace a player in a game. Usually, it is enemies that the player must face, but in this case, it is a matter of imitating the decisions of a player with the same resources as the human player.",

                    "To do this, and after studying many different systems, I decided to turn to the 'Utility AI' system. This system evaluates the best actions to take for each phase of the game based on a weighting system defined in ScriptableObject.",

                    "It is then possible to manage the time it takes to make decisions (to simulate thinking time), as well as its 'personality' (aggressive, defensive, balanced).",

                    "Finally, the implementation of a polished architecture throughout the project helped me a lot here, as it was then very easy for me to inform the AI of the state of the game and give it access to the various game resources in order to evaluate and carry out its actions."
                ],

                media: "images/Projects/SongVoid/SongVoid_Gifs/Gifs_Opti/SongVoid_Portfolio_AIController_Gif_Opti.gif"
            },

            {
                /* 7 */
                title: "Personal Package : Dialogue Graph",

                description: [
                    "I improved my personal 'Dialogue Graph' tool package, which I had already used on the game 'Moonshine Murder'.",

                    "It now supports Unity's localisation system and allows you to assign 'Command Actions' to each node to trigger.",

                    "Therefore, all of the game's dialogues (and texts) are localised into three languages (French, English, Spanish).",

                    "This tool has been a great help in creating the game's dialogue scenes, and supports a multiple-choice system visible in the graph.",

                    "The graph thus created is then converted into a ScriptableObject and processed by a 'Dialogue Controller' and a 'Dialogue Displayer', both of which are highly customisable."
                ],

                media: "images/Projects/SongVoid/SongVoid_Gifs/Gifs_Opti/SongVoid_Portfolio_Dialogs_Gif_Opti.gif"
            },

            {
                /* 8 */
                title: "Personal Package : Design Pattern : Command Actions",

                description: [
                    "This is surely the most important design pattern I developed for this project (apart from Singleton), Command Actions, and it's the first time I've used it.",

                    "It's everywhere in every element of the game and works in tandem with Singleton.",

                    "It allows me to play sounds, activate tutorial windows, change scenes, add objectives, bring in reinforcements, trigger special events, influence dialogues, and much more, without having to go through the code, all can be done in the editor.",

                    "This is the design pattern that has helped me the most in adding feedback, polishing certain aspects of the game, adding game feel, and quickly managing the flow of the game.",

                    "It consists of something very simple : encapsulating actions in data (ScriptableObjects).",

                    "This way, I just have to add lists of 'CommandActions' to certain places in my code, and those recorded in them will be executed directly.",

                    "It is completely independent of the project, which is why I made it into a personal package so that I can reuse it in future projects."
                ],

                media: "images/Projects/SongVoid/SongVoid_Gifs/Gifs_Opti/SongVoid_Portfolio_CommandActions_Gif_Opti.gif"
            },

            {
                /* 9 */
                title: "Personal Package : Progression Tracking",

                description: [
                    "I also developed another personal package for this project : 'Progression Tracking'.",

                    "This consists of encapsulating in data (ScriptableObjects) game states to be checked, which are then handled by a 'Progression Manager' that checks whether a 'ProgressionTracking' is considered complete or not.",

                    "I use this design pattern in particular to check players' victory conditions (and the status of level objectives), but also to trigger 'Command Actions' only under certain conditions in the 'Level Controller' (see above).",

                    "The biggest challenge here was to make it accessible in the editor and easy to implement."
                ],

                media: "images/Projects/SongVoid/SongVoid_Gifs/Gifs_Opti/SongVoid_Portfolio_ProgressionPoints_Gif_Opti.gif"
            },

            {
                /* 10 */
                title: "Personal Package : Universal State Machine",

                description: [
                    "I also created a generalised State Machine personal package.",

                    "I use it in the game for the player controller states (select, order, preview).",

                    "The only elements that need to be recreated for each project are the states themselves. As for initialising the state machine, states, and transition management, everything is already taken care of."
                ],

                media: "images/Projects/SongVoid/SongVoid_Gifs/Gifs_Opti/SongVoid_Portfolio_StateMachine_Gif_Opti.gif"
            },

            {
                /* 11 */
                title: "Personal Package : Full Audio System",

                description: [
                    "I developed a full and customisable audio system that is independent of the project, so that it can be reused in other games in the future.",

                    "It works in combination with Sound Data, which are ScriptableObjects set up for each sound, allowing you to customise the type of sound, its volume, whether it loops, whether it fades in/out, and if so, for how long, if it stops on changing scene, and much more.",

                    "This allows very simple control over the game's entire sound design.",

                    "Combined with the 'Command Actions' design pattern, it becomes extremely quick to influence sounds just in the editor."
                ],

                media: "images/Projects/SongVoid/SongVoid_Gifs/Gifs_Opti/SongVoid_Portfolio_Audio_Gif_Opti.gif"
            },

            {
                /* 12 */
                title: "Personal Package UI Animator",

                description: [
                    "I have improved my personal 'Dev Animation' package that I developed for the game 'Moonshine Murder' (see the corresponding page).",

                    "This personal package makes it very easy to create animations for the UI or other game elements without having to write code.",

                    "All of the UI animations you see in the game (excluding cutscenes) were created using this personal package.",

                    "I have improved its ease of use and capabilities."
                ],

                media: "images/Projects/SongVoid/SongVoid_Gifs/Gifs_Opti/SongVoid_Portfolio_UIAnimator_Gif_Opti.gif"
            }

            //#endregion
        ]

        //#endregion
    },

    {
        //#region Lucent

        id: "lucent",
        title: "Lucent",
        image: "images/Projects/Lucent/T_Couverture_Lucent.png",
        date: "June, 2026",
        details: "Group 16 | 3 months | Unreal Engine | C++ | Blueprint | FPS",
        feature: "Lead Programmer - Gameplay - Gamefeel - Tools",
        categories: ["main", "home"],
        background: "images/Projects/Lucent/T_Background_Lucent.png",

        logo: "images/Projects/Lucent/T_Logo_Lucent.png",

        description: [
            "Lucent is a dark shooter, where you evolve in a megastructure while dragging the coffin link to you and killing enemies to light up your path with their blood.",

            "This project is an FPS made during my fourth year of game programming studies at IIM.",

            "It's the result of three months' work by a team of sixteen people :",

            "- 3 game programmers",

            "- 6 game artists",

            "- 5 game designers",

            "- 1 producer",

            "- 1 sound designer"
        ],

        itch: "https://logre.itch.io/lucent",
        
        contribution: [
            "For this project, I took on the role of lead gameplay programmer. I was therefore responsible for organising the programming team’s tasks, as well as contributing to the development of gameplay mechanics and tools for the game designers.",

            "So, we decided to focus on a short but high-quality immersive experience.",

            "As a result, I worked on the following game mechanics, some tools and numerous game feel elements, whilst planning the programming tasks."
        ],

        gameplayVideos: [
            {
                type: "youtube",
                url: "https://www.youtube.com/embed/V-8tFRjq7pI",
                ratio: "16 / 9"
            }
        ],

        features: [
            //#region Features Lucent
            {
                /* 1 */
                title: "Player's Movements & State Machine",

                description: [
                    "Since we divided the player’s tasks between two programmers, and in order to facilitate future work and collaboration, I took charge of implementing the player’s state machine.",
                
                    "This enabled us to separate the (numerous) different states of the player, and therefore quickly present a prototype to the game designers.",

                    "I then took charge of the player’s movement and the various constraints associated with the coffin, ensuring that all the necessary data for tweaking was made available."
                ],

                media: "images/Projects/Lucent/Gifs/GifsOpti/PlayerMovements_Lucent-min.gif"
            },

            {
                /* 2 */
                title: "Coffin",

                description: [
                    "My biggest challenge on this project was implementing the coffin’s behaviour.",

                    "I took over this task from scratch from a programmer who was struggling to bring the game designers’ vision to life.",

                    "As the coffin needed to simulate certain physics behaviours whilst also being an integral part of the character’s movement gameplay, it was important to me that the gameplay drives the physics, rather than the physics drives the gameplay.",

                    "So, I did not select the solution of using Unreal Engine’s pre-built physics system (which would have taken too long to limit for all the special cases).",

                    "Instead, I rebuilt everything from scratch by hand, from the coffin’s movements to its behaviour when it collides with an object.",

                    "As I couldn’t handle all of the extreme cases in some levels, rebuilding everything from scratch allowed me to provide the level designers with tools to constrain movement along a spline, attach it to a ledge, ..."
                ],

                media: "images/Projects/Lucent/Gifs/GifsOpti/Coffin_Lucent-min.gif"
            },

            {
                /* 3 */
                title: "Tools : Command Actions",

                description: [
                        "As we’re working on a linear game, we needed to find a simple and easily integrable way to allow the game designer to trigger specific events WHEN and WHERE they wish.",

                        "So I took the opportunity to develop an Unreal Engine version of one of my favourite design patterns : Command Actions.",

                        "It’s a design pattern I’d already used repeatedly in several of my previous Unity projects (see SongVoid).",

                        "Here, the core of the design pattern is written in C++, but each specific Command Action is implemented and compatible with Blueprints, allowing game designers quick and easy control over what happens.",

                        "This has enabled level designers to place boxes throughout the level, triggering Command Actions without needing a full-time programmer for each specific game sequence."
                    ],

                media: "images/Projects/Lucent/Gifs/GifsOpti/CommandActions_Lucent-min.gif"
            },

            {
                /* 4 */
                title: "Level Streaming",

                description: [
                    "Right from the start, it was clear to us that, given the planned size of our levels, we would need to use Unreal Engine’s Level Streaming to avoid unnecessary FPS drops throughout the game.",

                    "This was the first project in which I’d used it, and I was able to learn how it worked and discover some of its limitations, particularly regarding some issues it caused with our navmeshes.",

                    "However, suspecting that this system might impact the project, I decided to integrate it very early on in production, which allowed us to avoid any last-minute surprises."
                ],

                media: "images/Projects/Lucent/Gifs/GifsOpti/LevelStreaming_Lucent-min.gif"
            },

            {
                /* 5 */
                title: "UI : Menus & Effects",

                description: [
                    "I worked on the game’s various menus (main menu, pause menu, etc.), as well as ensuring controller compatibility for certain interactions (which aren’t supported by default in the engine).",

                    "I also created numerous on-screen UI effects, such as input tutorials that appear until the corresponding input is pressed (triggered by Command Actions), and quick text effects allowing Game Designers to incorporate lore into the levels (these also work with Command Actions)."
                ],

                media: "images/Projects/Lucent/Gifs/GifsOpti/UIEffects_Lucent-min.gif"
            }

            //#endregion
        ]

        //#endregion
    },

    {
        //#region Out Of ContROLL

        id: "out-of-controll",
        title: "Out of ContROLL",
        image: "images/Projects/OutOfContROLL/T_Couverture_OutOfContROLL.png",
        date: "December, 2024",
        details: "Group 11 | 3 months | Unreal Engine | C++ | Blueprint | Couch Game",
        feature: "Gameplay - Gamefeel - Juiciness - Game Loop",
        categories: ["main", "home"],
        background: "images/Projects/OutOfContROLL/T_Couverture_OutOfContROLL.png",

        logo: "images/Projects/OutOfContROLL/T_Logo_Out_of_Controll.png",

        description: [
            "Out of ContROLL is a fast-paced party game set in a vibrant pinball-inspired carnival world where players take on the role of bouncing pinballs. ",

            "This project is a Couh Game made during my Third year of game programming studies at IIM.",

            "It's the result of three months' work by a team of eleven people :",

            "- 2 game programmers",

            "- 2 game artists",

            "- 2 game designers",

            "- 2 producers",

            "- 1 associate producer / game artist",

            "- 2 sound designers"
        ],

        itch: "https://tami14994.itch.io/out-of-controll",
        
        contribution: [
            "For this project, on the programming side, we decided to really focus on the quality of the mechanics developed, in order to offer a real game experience.",

            "As a result, I worked on the following game mechanics, as well as the game loop and numerous game feel and juiciness elements."
        ],

        gameplayVideos: [
            {
                type: "local",
                url: "images/Projects/OutOfContROLL/OutofContROLL!-Gameplay.mp4",
                ratio: "16 / 9"
            },

            {
                type: "local",
                url: "images/Projects/OutOfContROLL/OutofContROLL!-Trailer.mp4",
                ratio: "16 / 9"
            }
        ],

        features: [
            //#region Features Out of ContROLL
            {
                /* 1 */
                title: "Player's actions & State Machine",

                description: [
                    "I programmed the players' behaviours and the associated State Machine.",

                    "Players have many different states during the game. To avoid overloading the player structure in the code, I implemented a design patern, the 'State Machine', to lighten the structure.",

                    "The player State Machine then allowed me to speed up the creation of the players' behaviours (using states and substates), as well as the players' reactions (see 'LD Elements').",

                    "For the player's movements, I mainly used the Unreal Engine physics system.",

                    "This means that the ball moves with the friction of its physic material as it rolls. However, I added a lot of customisable values for the game designers so that they could customise the movement as they wished and not be constrained by the engine's physics."
                ],

                media: "images/Projects/OutOfContROLL/Gifs/GifsOpti/PlayersActionsStateMachine-min.gif"
            },

            {
                /* 2 */
                title: "LD Elements",

                description: [
                    "With the help of the State Machine (see above), I made the players' reactions to the LD Elements. This includes the rails, bumper, boost-pad, death zones and turnstile.",

                    "To avoid complicating the structure and to optimise performance, I've set up an inheritance structure for these elements and the way players react to them.",

                    "In fact, it's the players who react to the elements and not the elements that give instructions to the players. As with all player actions, these reactions are included in the State Machine's states, giving us greater control over transitions between states.",

                    "The main difficulties came from the turnstile and the rails, which is why Unreal's physics is ignored in these elements, and movements are managed manually.",

                    "For the rails, I used the Unreal Engine's spline system, which gives continuity with the game artists' assets, but also allows me to follow the ball's path precisely as it travels.",

                    "All these elements can be fully customised by the game designers using several data assets."
                ],

                media: "images/Projects/OutOfContROLL/Gifs/GifsOpti/LDElements-min.gif"
            },

            {
                /* 3 */
                title: "Camera System",

                description: [
                    "I also made the camera system for the game.",

                    "This allows the camera to follow the center of the players and zoom in on their positions. I've also added a smoothing system to avoid sudden changes.",

                    "All the values are fully customisable by the game designers. This system also allows them to preview the maximum and minimum zoom from the editor, as well as defining the camera limits via a camera bound in the level."
                ],

                media: "images/Projects/OutOfContROLL/Gifs/GifsOpti/Camera-min.gif"
            },

            {
                /* 4 */
                title: "Round System & Gameloop",

                description: [
                    "I also did the round and phases system and the game loop.",

                    "To make the game run more smoothly, I've set up the system for moving from round to round, as well as from phase to phase (pre-round, starting-round, in-round, post-round, ...). This also includes locking inputs in certain phases, as well as resetting rounds (see 'Reset System').",

                    "In order to control the progress of the rounds and to be able to check their state from anywhere, I've made this system an Unreal Engine subsystem, making it even easier to use.",

                    "The rounds and phases can also be customised by the game designers using data assets."
                ],

                media: "images/Projects/OutOfContROLL/Gifs/GifsOpti/RoundAndGameloop-min.gif"
            },

            {
                /* 5 */
                title: "Reset Object System",

                description: [
                    "I have made the reset system for objects and players.",

                    "To do this, I created an interface implemented by all the objects that have to reset between rounds.",

                    "This way they define their reset behaviour themselves, without making the code architecture too complicated.",

                    "This reset is called each time a round changes."
                ],

                media: "images/Projects/OutOfContROLL/Gifs/GifsOpti/ResetObjects-min.gif"
            },

            {
                /* 6 */
                title: "Power Up",

                description: [
                    "I did the power ups for the game. This includes their spawn, but also their collection and behavior.",

                    "To keep the architecture correct, all power ups inherit from the same class, which defines their collection and destruction behavior.",

                    "The player then collects the power ups, and their behavior is then defined in sub-states of the player's state machine (as for 'LD Elements' reactions, see above).",

                    "All power-ups are fully customizable by the game designers using data assets."
                ],

                media: "images/Projects/OutOfContROLL/Gifs/GifsOpti/PowerUp-min.gif"
            },

            {
                /* 7 */
                title: "Juiciness and Game feel's Elements",

                description: [
                    "As mentioned above, I worked a lot on game feel and juiciness elements.",

                    "Making mechanics is something I really enjoy, but if they're not satisfying, there's no point. That's why I've been working a lot on this point, with the implementation of an easy controller vibration system for game designers, the creation of tween animation (thanks to FC Tween), camera shakes, the skin system, the proper integration of game artists' assets, the smoothness of LD elements (such as the entrance to the rails or even the use of the turnstile), and much more...",

                    "To implement these elements quickly and easily, I used the engine's ability to link C++ and Blueprint. As a result, almost all gamefeel and juiciness elements are called in C++, but implemented in Blueprint.",

                    "All these elements can be customized by game designers using data assets or curves, so that they can control the game's feel."
                ],

                media: "images/Projects/OutOfContROLL/Gifs/GifsOpti/GameFeelEffects.gif"
            },

            {
                /* 8 */
                title: "Custom Local Multiplayer",

                description: [
                    "I designed the custom local multiplayer system for the Couch Game.",

                    "This included separate player controls (for 4 players), player assignment to specific controllers, player connection and disconnection, as well as the ability to play with several players on a single keyboard, which made testing much easier.",

                    "This system is derived from Unreal Engine's game viewport class, to make it easier to collect inputs from different players."
                ],

                media: "images/Projects/OutOfContROLL/Gifs/GifsOpti/LocalMulti-min.gif"
            },

            {
                /* 9 */
                title: "Sound Subsystem",

                description: [
                    "I also did the sound subsystem for the game's elements. The aim here was to create a sound ambiance as rich as possible.",

                    "To achieve this, I used MetaSound, which is integrated into Unreal Engine.",

                    "This made it easier to increase the richness of the game's sound by giving a random modifier to the pitch of certain sounds, to simplify the randomness when certain sounds are played.",

                    "I then created a SoundManager subsystem to group sound parameters into a data asset and add sound effects such as fade in / fade out. The game designers then could just adjust the volume of each sounds easily.",

                    "Finally, I used Unreal Engine's audio mix to create several Sound Classes and simplify the modification of the sound volume of the different classes in the settings."
                ],

                media: "images/Projects/OutOfContROLL/Gifs/GifsOpti/SoundSystem-min.gif"
            }
            
            //#endregion
        ]

        //#endregion
    },

    {
        //#region Liberty Express
        id: "liberty-express",
        title: "Liberty Express",
        image: "images/Projects/LibertyExpress/T_Couverture_LibertyExpress.png",
        date: "June, 2024",
        details: "Group 8 | 1 month | Unreal Engine | Blueprint | FPS",
        feature: "Gameplay - Gamefeel - Juiciness - AI",
        categories: ["main", "home"],
        background: "images/Projects/LibertyExpress/T_Couverture_LibertyExpress.png",

        logo: "images/Projects/LibertyExpress/T_Logo_Liberty_Express.png",

        description: [
            "Liberty Express is a narrative FPS where you follow the escape of Jack 'the Revolver' aboard a train besieged on all sides by the Sheriff's police drones. All aboard the train to freedom !",

            "This project is a First Person Shooter made during my second year of game programming studies at IIM.",

            "It's the result of one month's work by a team of eight people :",

            "- 2 game programmers",

            "- 3 game artists",

            "- 2 game designers",

            "- 1 producer"
        ],

        itch: "https://garzra41.itch.io/liberty-express",
        
        contribution: [
            "For this project, on the programming side, we decided to really focus on the quality of the mechanics developed, in order to offer a real game experience.",

            "As a result, I worked on the following game mechanics, as well as numerous game feel and juiciness elements."
        ],

        gameplayVideos: [
            {
                type: "youtube",
                url: "https://www.youtube.com/embed/wR_k7r1B5xk",
                ratio: "16 / 9"
            }
        ],

        features: [
            //#region Features Liberty Express
            {
                /* 1 */
                title: "Drones AI",

                description: [
                    "I programmed the behaviour of the game's enemies: the drones.",

                    "To manage the changes in the drones' behaviour, I mainly used the systems built into Unreal Engine, such as the behaviour tree, blackboard and even sensory systems such as sight.",

                    "This allows me to easily assign certain behaviours to certain conditions (for example, depending on what my drone sees, its distance from the player and its remaining life).",

                    "Drones can attack, die, move freely in 3D space (see below), etc. And all these mechanics come with their own polish elements, such as using physics and a tilted effect when the drones move, ragdoll when they die, etc."
                ],

                media: "images/Projects/LibertyExpress/Gifs/GifsOpti/DroneAIPortfolio.gif"
            },

            {
                /* 2 */
                title: "Dynamic 3D Pathfinding",

                description: [
                    "One of the main difficulties with the drones was getting them to move freely in 3D space.",

                    "Unreal Engine has a pathfinding system (NavMesh) for 2D projected spaces, but we weren't happy with what it allowed for 3D pathfinding because we would have had to predefine the paths ourselves and that wouldn't have diversified their movements enough.",

                    "To get past this I started with a slightly modified plugin that lets you create paths (even in game) in 3D space using an octree combined with an A* algorithm. To avoid this being too resource-intensive, I had to slightly modify the pathfinding parameters.",

                    "Furthermore, as it doesn't take into account the movement of objects, I then had to manage the movement of the drones based on the paths found.",

                    "Finally, I added a system to prevent the game from soft-locking if a drone got stuck, so that it could still find its destination."
                ],

                media: "images/Projects/LibertyExpress/Gifs/GifsOpti/PathfindingPortfolio.gif"
            },

            {
                /* 3 */
                title: "Juiciness and Game feel's Elements",

                description: [
                    "As mentioned above, I worked a lot on game feel and juiciness elements.",

                    "For example, I've simplified all model collisions in the game, disabling their original collisions and replacing them with collisions using simple shapes. This not only makes the player's movements more pleasant, but also prevents him from getting stuck.",

                    "This also includes drone movement, which uses the Unreal Engine physics system to make it more fluid. Drones also have different effects when they die, in addition to randomly changing sounds to make their destruction more satisfying.",

                    "Camera shake has also been added to enhance the effects of some sequences (train destruction, etc.)..."
                ],

                media: "images/Projects/LibertyExpress/Gifs/GifsOpti/JuicinessGamefeelPortfolio.gif"
            },

            {
                /* 4 */
                title: "Background Parallax",

                description: [
                    "Another difficulty was the making of the moving train.",

                    "In reality, the train doesn't move at all !",

                    "This would have meant more difficult management of the elements inside, drone pathfinding, player movement and collisions.",

                    "To avoid this, I decided instead to move the scenery in the opposite direction and “generate” it procedurally, to give the impression that the train is moving forward and traveling through several landscapes. These sceneries are created at start-up and change according to the current phase of the game (desert, city, tunnel).",

                    "They are then included in a loop that returns them to the start when part of a scenery reaches the end of its journey.",

                    "These techniques avoid the need to generate too many 3D models, and make the game run more smoothly."
                ],

                media: "images/Projects/LibertyExpress/Gifs/GifsOpti/LoopDecorPortfolio.gif"
            },

            {
                /* 5 */
                title: "Game Phase and Waves",

                description: [
                    "To simplify the flow of the game, I've made a system that saves the current state of the game.",

                    "One of the systems that depends on this is the wave system. I've made it easy for game designers to customize.",

                    "They can choose the spawn points for each phase, the number of enemies in each phase, the speed at which they appear, ..."
                ],

                media: "images/Projects/LibertyExpress/Gifs/GifsOpti/WavesPortfolio.gif"
            },

            {
                /* 6 */
                title: "Level Sequences",

                description: [
                    "One of the main points of the game are the numerous highlights of the chase, such as the gradual destruction of the train, or even the transitions between the black and white portals.",

                    "To achieve this, I had to create a system to properly record the different phases of the game and trigger events.",

                    "I then worked with one of the artists to realize these sequences and implement them correctly in the game.",

                    "To do this, we used Level Sequences integrated directly into Unreal Engine, enabling us to animate certain elements during the game at certain times.",

                    "We then had to trigger these Level Sequences, and modify the train's collisions and visuals at the right moments."
                ],

                media: "images/Projects/LibertyExpress/Gifs/GifsOpti/LevelSequencesPortfolio.gif"
            },

            {
                /* 7 */
                title: "Sound System",

                description: [
                    "I also did the sound system for the game's elements. The aim here was to create a sound ambiance as rich as possible.",

                    "To achieve this, I used MetaSound, which is integrated into Unreal Engine.",

                    "This made it easier to increase the richness of the game's sound by giving a random modifier to the pitch of certain sounds, to simplify the randomness when certain sounds are played, and also to spatialize sounds such as drone engines.",

                    "I then created a SoundManager system to group sound parameters into a Blueprint and add sound effects such as fade in / fade out.",

                    "Finally, I used Unreal Engine's audio mix to create several Sound Classes and simplify the modification of the sound volume of the different classes in the settings."
                ],

                media: "images/Projects/LibertyExpress/Gifs/GifsOpti/SoundSystemPortfolio.gif"
            },

            //#endregion
        ]

        //#endregion
    },

    {
        //#region Wandering Traveller
        id: "wandering-traveller",
        title: "Wandering Traveller",
        image: "images/Projects/WanderingTraveller/T_Couverture_WanderingTraveller.jpg",
        date: "January, 2024",
        details: "Group 2 | 4 months | Unity | Mobile | Clicker",
        feature: "Gameplay - Gamefeel - Juiciness - UI",
        categories: ["main", "home"],
        background: "images/Projects/WanderingTraveller/T_Couverture_WanderingTraveller.jpg",

        logo: "images/Projects/WanderingTraveller/T_Logo_Wandering_Traveller.jpg",

        description: [
            "Wandering Traveller puts you in the shoes of a mage captaining a ship that must be defended against enemy hordes. How far will you go ?",

            "This project is a mobile clicker game done in parallel with my second year of game programming studies.",

            "It's the result of four months' work by a team of only two game programmers, therefore our goal was mainly to challenge our abilities while learning new technical skills."
        ],

        itch: "",
        
        contribution: [
            "For this project, I worked mainly on the following game mechanics as well as the game feel and the juiciness.",

            "I was also able to deepen my technical UI skills in Unity by creating the game's entire menu and interface systems."
        ],

        gameplayVideos: [
            {
                type: "youtube",
                url: "https://www.youtube.com/embed/L--4ViZkMGA",
                ratio: "9 / 16"
            }
        ],

        features: [
            //#region Features Wandering Traveller
            {
                /* 1 */
                title: "Interface Systems",

                description: [
                    "Did a lot of work on the game's UI systems, creating all the in-game interfaces and associated systems.",

                    "This includes the round and experience systems and diplays, as well as the menus and even the upgrade and spell selection panels.",

                    "I also did a mana bar for casting spells and transition effects between rounds."
                ],

                media: "images/Projects/WanderingTraveller/Gifs/GifsOpti/InterfaceSystemPortfolio-min.gif"
            },

            {
                /* 2 */
                title: "Fighting System",

                description: [
                    "Took part in the creation of the fighting system, more specifically the implementation of the three different spells (precise, zone, slow), as well as the elements of the spells and the damage inflicted on enemies.",

                    "Damage is inflicted according to the enemy's class and element type.",

                    "The player can choose which spell to invoke, in addition to the element type, to optimize the damage inflicted."
                ],

                media: "images/Projects/WanderingTraveller/Gifs/GifsOpti/FightingSystemPortfolioWT-min.gif"
            },

            {
                /* 3 */
                title: "Upgrades and Experience System",

                description: [
                    "In parallel with the combat system, I worked on the spell upgrade system.",

                    "The player can upgrade his three spells over twelve upgrades and three steps each.",

                    "When the player kills units, he recovers experience which he can then spend.",

                    "Upgrades increase the damage and range of these combat spells.",

                    "Spell visuals adapt according to the level reached and the element selected."
                ],

                media: "images/Projects/WanderingTraveller/Gifs/GifsOpti/UpgradeSystemPortfolio-min.gif"
            },

            {
                /* 4 */
                title: "Juiciness and Gamefeel Elements",

                description: [
                    "For example, the spell or element selection indicators, making the possible actions more readable.",

                    "On top of that, I added fluid transitions on these indicators and all the elements of the UI to make the navigation experience much more fluid and pleasing to the eye.",

                    "I also contributed to the addition of certain juiciness elements, such as the transitions between rounds and the experience particles instantiated when enemies die."
                ],

                media: "images/Projects/WanderingTraveller/Gifs/GifsOpti/JuicinessGamefeelElement-min.gif"
            },

            {
                /* 5 */
                title: "Audio and Highscore System",

                description: [
                    "Implemented the audio system in the game.",

                    "This includes launching sounds at the right times, including them in the project, looping several sounds when necessary (for exemple, launching music in succession) and allowing their intensity to be adjusted in the options.",

                    "Some sounds are also limited in their launch by a system that prevents one sound from overwhelming the whole and creating an unpleasant effect (for example, the sound of enemies hitting on the boat).",

                    "In addition, a highscore system saves the highest number of rounds reached and displays it in a top 3 in the menu. These scores are saved even after you quit the game."
                ],

                media: "images/Projects/WanderingTraveller/Gifs/GifsOpti/AudioHighScorePortfolioWT-min.gif"
            },

            {
                /* 6 */
                title: "Menu Sytem",

                description: [
                    "Finally, I made a menu system that allows you to display several sub-menus or even just contemplate the landscape by disabling the UI elements.",

                    "Also, I looped the advancing clouds to make an infinite loop in the menu background."
                ],

                media: "images/Projects/WanderingTraveller/Gifs/GifsOpti/MenuPortfolioWT-min.gif"
            },
            //#endregion
        ]

        //#endregion
    },

    {
        //#region Moonshine Murder
        id: "moonshine-murder",
        title: "Moonshine Murder",
        image: "images/Projects/MoonshineMurder/T_Couverture_MoonshineMurder.png",
        date: "February, 2025",
        details: "Group 9 | 1 month | Unity | C# | Narrative Game",
        feature: "Lead programmer - Tool - Gameplay - Gamefeel - Juiciness - Game Loop",
        categories: ["main", "home"],
        background: "images/Projects/MoonshineMurder/T_Couverture_MoonshineMurder.png",

        logo: "images/Projects/MoonshineMurder/T_Logo_MoonshineMurder.png",

        description: [
            "Moonshine Murder is a multiple-choice narrative game where you try to solve an investigation. Talk to the various regulars at your bar, dig into the discussion to uncover their secrets.",

            "This project is a multiple-choice narrative game made during my Third year of game programming studies at IIM.",

            "It's the result of one month work by a team of nine people :",

            "- 3 game programmers",

            "- 3 game artists",

            "- 2 game designers",

            "- 1 producers / game artist"
        ],

        itch: "https://play.google.com/store/apps/details?id=com.LostDesertInteractive.MoonshineMurder&utm_source=emea_Med",
        
        contribution: [
            "For this project, as we were working on a game requiring a lot of narrative integration by the game designers, and we had a fairly tight deadline, we insisted more than usual on giving them tools to facilitate this integration.",

            "As a result, I worked on the following tools & game mechanics, as well as the game loop and numerous game feel and juiciness elements."
        ],

        gameplayVideos: [
            {
                type: "youtube",
                url: "https://www.youtube.com/embed/cvUYbwIciLk",
                ratio: "16 / 9"
            }
        ],

        features: [
            //#region Features Moonshine Murder
            {
                /* 1 */
                title: "Dialog Graph Tool",

                description: [
                    "I programmed a dialog graph tool to ease dialogs' integration process.",

                    "This tool is one of the central element of the game, allowing game designers to create a dialog tree in a Unity graph, and associate dialogs with it. It can also contain choices (see below) and make action calls (see below) to give game designers maximum control over the flow of the game.",

                    "I created this tool from an empty graph on Unity, and then recreated everything from scratch (which was the main difficulty). This includes creating and linking nodes, saving them, loading them, exporting them as ScriptableObject data and using them in “DialogDisplayers”, so that the tool can be used for different types of game.",

                    "Therefore, the tool is suitable for multiple-choice games, rpg, etc., with several dialogs for different characters."
                ],

                media: "images/Projects/MoonshineMurder/Gifs/GifsOpti/G_MM_ToolDialog.gif"
            },

            {
                /* 2 */
                title: "Action caller graph Tool",

                description: [
                    "The dialog tool also contains an action caller system.",

                    "In addition to creating their own dialog tree, game designers can also assign as many actions as they like to each node.",

                    "To do this, they simply drag and drop an object from the scene onto the node, choosing the method they want to trigger, and then, when that node is executed in the dialog tree, all the actions will be performed.",

                    "It's through this that characters enter and exit the scene, but also that clues are unlocked, choices are made available, and the flow of the game and its staging unfolds.",

                    "This system was surely the most challenging to make, especially to ensure that it was unbreakable and highly reliable, so as to avoid any strange behavior.",

                    "This system also comes with another tool I created for the other programmers, a permanent ID assigner, which in this case allows me to find references to actions in the scene."
                ],

                media: "images/Projects/MoonshineMurder/Gifs/GifsOpti/G_MM_ToolActionCaller.gif"
            },

            {
                /* 3 */
                title: "Mutliple-choice System",

                description: [
                    "Finally, the tool also takes into account the player's choices.",

                    "As I said above, it's a dialogue tree, so it allows you to customize the different dialogue paths according to the player's choices.",

                    "But there's more to it than that. There's also a system of consequences/conditions for choices.",

                    "This system is associated with an inventory dialog that can be filled in as the graph progresses by game designers using the action caller (see above), and then game designers can add conditions to make a choice available or not. This then allows choices to be saved, so that consequences can be applied to them.",

                    "The dialog inventory can also be filled outside the graph. This is how alcohol effects make some choices available or unavailable to the player.",

                    "The game's clue system also works with this system, making choices available if the player has obtained the clue through a certain dialogue, for example.",

                    "All these systems combined make it a perfect tool for games with dialogs, that can support multiple choices, as in this game."
                ],

                media: "images/Projects/MoonshineMurder/Gifs/GifsOpti/G_MM_ToolMultipleChoice.gif"
            },

            {
                /* 4 */
                title: "Dev Anim Tool & juiciness",

                description: [
                    "I also made a visual dev anim tool for programmers, as well as some gamefeel and juiciness elements.",

                    "In fact, I've created a visual editor interface that makes it easy to create numerous animations useful for the game's gamefeel and juiciness.",

                    "These include color transitions, fade-in/fade-out, animated movements, scale effects, idle effects and more. It can also be used to trigger specific events at certain points in the animation, as well as to create sequences of several animations.",

                    "The tool is an interface for animations scripted with Dotween, making these animations available in the editor with their customization.",

                    "All you have to do is trigger them with a Unity Event, for example, or a certain Action caller... (see above)."
                ],

                media: "images/Projects/MoonshineMurder/Gifs/GifsOpti/G_MM_ToolVisualAnimTween.gif"
            },

            {
                /* 5 */
                title: "Localization Tool",

                description: [
                    "I did the game's localization system.",

                    "Instead of using the Unity system for localization, I recreated a system allowing game designers to easily integrate their dialogues.",

                    "They can write their dialogues on an Excel spreadsheet in different languages, assign them a key and export the spreadsheet as a CSV file.",

                    "The tool I've made then transforms the CSV in the editor into a ScriptableObject that the localization system can understand. All you have to do is assign the keys to the right texts and you're done.",

                    "The system also works perfectly with the dialog tool, without the two being dependent on each other to avoid a complex architecture."
                ],

                media: "images/Projects/MoonshineMurder/Gifs/GifsOpti/G_MM_Tool.gif"
            },

            {
                /* 6 */
                title: "Sound System",

                description: [
                    "I finally re-used a sound system I had developed during a game jam (see in Game Jams : Plié d'Avance), which I improved.",

                    "It uses Unity's sound class and mixer system. I've added easy-to-use methods for fadeOut / fadeIn music transitions, as well as random pitch options for greater diversification.",

                    "The biggest change, however, is in the way sounds are launched. Now sounds are assigned to data, and it's just a matter of calling the sound data in the editor (through a Unity Event, for example) to launch the sound correctly.",

                    "The system then processes the sound, taking into account the parameters set in the data."
                ],

                media: "images/Projects/MoonshineMurder/Gifs/GifsOpti/G_MM_SoundSystem.gif"
            }
            //#endregion
        ]

        //#endregion
    },

    {
        //#region B4 it Ends
        id: "b4-it-ends",
        title: "B4_itEnds",
        image: "images/Projects/B4ItEnds/T_Couverture_B4ItEnds.png",
        date: "May, 2024",
        details: "Group 11 | 1 month | Unity | Point and Click",
        feature: "Gameplay - Juiciness",
        categories: ["main"],
        background: "images/Projects/B4ItEnds/T_Couverture_B4ItEnds.png",

        logo: "images/Projects/B4ItEnds/T_Logo_B4ItEnds.png",

        description: [
            "In B4_itEnds. , you play as the robot B4 who tries to keep alive his plants in a world where ressources are limited.",

            "This project is a PC Point and Click game done in parallel with my second year of game programming studies, within the video game's creation association : LeoIndieGame.",

            "It's the result of one month's work by a team of eleven people :",

            "- 4 game programmers",

            "- 2 game artists",

            "- 4 game designers",

            "- 1 tech artist"
        ],

        itch: "https://khiinfox.itch.io/b4-itends",
        
        contribution: [
            "For this project, I worked mainly on the following game mechanics as well as the juiciness.",

            "I was also able to deepen my technical skills in Unity by using new modules that eased programmation's methods and juiciness elements' additions."
        ],

        gameplayVideos: [
            {
                type: "local",
                url: "images/Projects/B4ItEnds/Backup_Before_ItEnds_FHD.mp4",
                ratio: "16 / 9"
            }
        ],

        features: [
            //#region Features B4 it Ends
            {
                /* 1 */
                title: "Plants & Frankenstein Plant",

                description: [
                    ],

                media: "images/Projects/B4ItEnds/Gifs/GifsOpti/PlantsFrankentseinPlant_Opti.gif"
            },

            {
                /* 2 */
                title: "Dissections & Transplants Menus",

                description: [
                    ],

                media: "images/Projects/B4ItEnds/Gifs/GifsOpti/DissectionTranslantMenus_Opti.gif"
            }
            //#endregion
        ]

        //#endregion
    },

    {
        //#region Gloomies Enigma
        id: "gloomies-enigma",
        title: "Gloomies' Enigma",
        image: "images/Projects/GloomiesEnigma/T_Couverture_GloomiesEnigma.png",
        date: "March, 2024",
        details: "Group 8 | 1 month | Unity | Mobile | Puzzle Game",
        feature: "Gameplay - Gamefeel - Google Play",
        categories: ["main", "home"],
        background: "images/Projects/GloomiesEnigma/T_Couverture_GloomiesEnigma.png",

        logo: "images/Projects/GloomiesEnigma/T_Logo_GloomiesEnigma.png",

        description: [
            "Can you guide the Gloomies through a series of challenges in a futuristic laboratory ?",

            "Gloomies' Enigma is a mobile puzzle game made during my second year of game programming studies at IIM.",

            "It's the result of four weeks' work by a team of eight people :",

            "- 3 game programmers",

            "- 3 game artists",

            "- 2 game designers"
        ],

        itch: "https://august-languepin.itch.io/gloomiesenigma",
        
        contribution: [
            "For this project, I worked mainly on the following core game mechanics as well as the game feel."
        ],

        gameplayVideos: [
            {
                type: "youtube",
                url: "https://www.youtube.com/embed/f_Gj9rITI9k",
                ratio: "16 / 9"
            }
        ],

        features: [
            //#region Features Gloomies Enigma
            {
                /* 1 */
                title: "Personalized Physics",

                description: [
                    "In order to obtain character movements subject to gravity while retaining a certain amount of control to limit randomness, I worked on a customized physics system allowing them to fall in a straight line or to generalize their trajectory when jumping."
                ],

                media: "images/Projects/GloomiesEnigma/Gifs/GifsOpti/JumpGloomies-min.gif"
            },

            {
                /* 2 */
                title: "Bonuses and traps",

                description: [
                    "I created seven bonuses and three traps.",

                    "Some, like the jumper, directly affect the physics of the characters.",

                    "Others interact with other elements, such as the buttons that desactivate lasers while pressed.",

                    "I also worked on bonus game feel elements such as transition effects on the change of gravity or the jumper's trajectory circle."
                ],

                media: "images/Projects/GloomiesEnigma/Gifs/GifsOpti/portfolioApercuBonus-min.gif"
            },

            {
                /* 3 */
                title: "Bonuses/Traps custom Drag and Drop",

                description: [
                    "I made a custom drag-and-drop system to place a certain number of bonuses in the level.",

                    "This system makes it possible to take into account whether the object is actually placable before continuing.",

                    "It also allows objects to be placed only on the floor or ceiling by detecting the surfaces above them, and automatically returns the objects accordingly.",

                    "It also includes a grid system and clamps objects to it."
                ],

                media: "images/Projects/GloomiesEnigma/Gifs/GifsOpti/dragDropPortfolio-min.gif"
            },

            {
                /* 4 */
                title: "Google Play services",

                description: [
                    "I also worked on the implementation of google play services in the Unity project.",

                    "This includes connecting to a google account, supporting Play Games successes and completing them.",

                    "In addition, I managed the technical side of publishing the game on the play store, as well as the various updates before the final version of the game arrived."
                ],

                media: "images/Projects/GloomiesEnigma/Gifs/GifsOpti/PlayGamesGloomies-min.gif"
            },
            //#endregion
        ]

        //#endregion
    },

    {
        //#region Sweet On Peg
        id: "sweet-on-peg",
        title: "Sweet On Peg",
        image: "images/Projects/SweetOnPeg/T_Couverture_SweetOnPeg.png",
        date: "October, 2023",
        details: "Group 5 | 1 week | Unity | Brick-Breaker",
        feature: "Gameplay - Gamefeel - Juiciness",
        categories: ["main", "home"],
        background: "images/Projects/SweetOnPeg/T_Couverture_SweetOnPeg.png",

        logo: "images/Projects/SweetOnPeg/T_Couverture_SweetOnPeg.png",

        description: [
            "Sweet on Peg is a reverse brick-breaker. Here you'll have powers to help you break all the bricks.",

            "This game was made during my second year of game programming studies at IIM.",

            "It's the result of a week's work by a team of five people :",

            "- 2 game programmers",

            "- 2 game artists",

            "- 1 game designers"
        ],

        itch: "https://victinight.itch.io/sweets-on-peg",
        
        contribution: [
            "For this project, I worked mainly on the following core game mechanics as well as the juiciness and the game feel."
        ],

        gameplayVideos: [
            {
                type: "local",
                url: "images/Projects/SweetOnPeg/SweetOnPegDemo.mp4",
                ratio: "16 / 9"
            }
        ],

        features: [
            //#region Features Sweet On Peg
            {
                /* 1 */
                title: "Bricks Destruction",

                description: [
                    "I focused on the brick destruction system.",

                    "I record the bricks hit and destroy them as the ball falls.",

                    "Each brick brings specific points. These points are then displayed on screen."
                ],

                media: "images/Projects/SweetOnPeg/Gifs/GifsOpti/DestroyBricks.gif"
            },

            {
                /* 2 */
                title: "Bricks Power",

                description: [
                    "I've also implemented some of the brick powers.",

                    "For example, green bricks (+1) add a ball to throw, x2 bricks give twice as many points as a normal brick and you have to destroy all orange bricks to win the game."
                ],

                media: "images/Projects/SweetOnPeg/Gifs/GifsOpti/BricksPowerPortfolio.gif"
            },

            {
                /* 3 */
                title: "Juiciness and Game feel",

                description: [
                    "I was involved in adding many juiciness elements. These include particle management, both for brick destruction and victory.",

                    "I also made sure that the ball could never be blocked by destroying the blocking elements when this happened.",

                    "The music also speeds up according to the number of bricks hit."
                ],

                media: "images/Projects/SweetOnPeg/Gifs/GifsOpti/JuicinessSweetPortfolio.gif"
            }
            //#endregion
        ]
        //#endregion
    },

    {
        //#region Prologue
        id: "prologue",
        title: "Prologue",
        image: "images/Projects/Prologue/T_Couverture_Prologue.jpg",
        date: "June, 2023",
        details: "Solo Project | 6 months | Unity | Platformer",
        feature: "Gameplay - Gamefeel - Juiciness - UI",
        categories: ["main"],
        background: "images/Projects/Prologue/T_Couverture_Prologue.jpg",

        logo: "images/Projects/Prologue/T_Couverture_Prologue.jpg",

        description: [
            "Prologue is a single-player platform adventure game on PC in which you play a knight who can travel between different ages.",

            "This game was made during my first year of game programming studies at IIM.",

            "It's the result of six months solo work. It's also my first project using unity and C# language."
        ],

        itch: "",
        
        contribution: [
            "For this project, as I worked on it alone, I designed the entire game mechanics (gameplay, game feel, juiciness, UI). However, here's the one that stands out."
        ],

        gameplayVideos: [
            {
                type: "youtube",
                url: "https://www.youtube.com/embed/sLMF1op-yfY",
                ratio: "16 / 9"
            }
        ],

        features: [
            //#region Features Prologue
            {
                /* 1 */
                title: "Fighting System",

                description: [
                    "Developed the game's entire fighting system. It's all based on timing.",

                    "If the player blocks the enemy at the right moment, the enemy becomes vulnerable and can take damage. If the player blocks at the wrong time, the enemy inflicts damage on the player.",

                    "Since combat is essentially based on timing, and combat is recurrent throughout the game, the system needs to be rigorous from a technical point of view to give the player a good feel for the game and make combat more nervous. Therefore, it's a system that got my full attention."
                ],

                media: "images/Projects/Prologue/Gifs/GifsOpti/portfolioFightingSystemP-min.gif"
            },

            {
                /* 2 */
                title: "Enemy Behavior",

                description: [
                    "Created all four enemy behaviors.",

                    "Some are in patrol mode as long as the player is not in their line of sight.",

                    "Others remain in sentinel mode, guarding both sides until the player is in their line of sight.",

                    "Ghosts go straight ahead, firing projectiles until they hit a wall.",

                    "Finally, the boss has two distinct phases, in which he first attempts to fire projectiles at the player before charging him.",

                    "All these behaviors include line-of-sight awareness, the ability to follow the player if spotted (and jump over obstacles or avoid cliffs), and the ability to return to their routine if the player evades them.",

                    "They also have the ability to attack as described above."
                ],

                media: "images/Projects/Prologue/Gifs/GifsOpti/PortfolioEnemyBehavior-min.gif"
            },

            {
                /* 3 */
                title: "Time Travel",

                description: [
                    "The game lets the player change era.",

                    "Indeed, in some zones, changing era allows the player to unlock some passages and progress through the level. Some jumps even require the player to change era in the middle of the jump.",

                    "For this mechanic, I'm creating two levels built in the same way, but with their own particularities. All I have to do is put the player on the other level when he changes era.",

                    "This requires a great amount of rigor, especially because of the various bugs that can occur during this transition. The player must always have the impression of keeping control when changing era, and not having the sensation of breaking the game.",

                    "So this mechanic also got my full attention."
                ],

                media: "images/Projects/Prologue/Gifs/GifsOpti/TimeTravelling-min.gif"
            },

            {
                /* 4 */
                title: "Shop, Inventory and Upgrades",

                description: [
                    "The player can pick up coins and store them throughout the game. He can then spend them with a merchant in exchange for equipment.",

                    "These shop and character upgrade systems go side by side with an inventory system that stores what the character collects during the game.",

                    "The inventory is then updated every time an item is collected, and the player can consult it in the bottom right-hand corner of the screen."
                ],

                media: "images/Projects/Prologue/Gifs/GifsOpti/PortfolioShopUpgradeP-min.gif"
            },

            {
                /* 5 */
                title: "Skills",

                description: [
                    "Objects are hidden throughout the level and give the player new skills when he find them.",

                    "These skills allowed me to implement some classic platform game mechanics, and therefore to train myself to reproduce them. These include a double jump and a dash.",

                    "The dash has received a little more attention from me, so that it fits in as well as possible with the combat system (for example, to make the handling of the back dash more intuitive). The player can now dodge attacks instead of deflecting them."
                ],

                media: "images/Projects/Prologue/Gifs/GifsOpti/PortfolioSkillsP-min.gif"
            },
            //#endregion
        ]
        //#endregion
    },

    /* ---- !MAIN ---- */

    /* ---- SIDE & JAMS ---- */

    {
        //#region  Plie d'avance
        id: "plie-d-avance",
        title: "Plié d'avance",
        image: "images/Projects/PlieDAvance/T_Couverture_PlieDAvance.png",
        date: "Septembre, 2024",
        details: "Group 8 |  4 days | Unity | Chase",
        feature: "Lead programmer - Gameplay - Gamefeel - Juiciness",
        categories: ["side", "jams"],
        background: "images/Projects/PlieDAvance/T_Couverture_PlieDAvance.png",

        logo: "images/Projects/PlieDAvance/T_Logo_PlieDAvance.png",

        description: [
            "In Plié d'avance you play either as a pyjama or as a steam iron thrown in the ironing pit. Who will survive ?",

            "This project is a two player chase game done during the Godfather / Godmother 2024 game Jam.",

            "It's the result of four days work by a team of eight people :",

            "- 3 game programmers",

            "- 2 game designers",

            "- 2 game artists",

            "- 1 project manager"
        ],

        itch: "https://kyuzya.itch.io/plie-davance",
        
        contribution: [
            "For this project, I took the role of Lead gameplay programmer, handling the technical direction of the game while implementing some of the core gameplay mecanics, game feel elements and juiciness."
        ],

        gameplayVideos: [
            {
                type: "youtube",
                url: "https://www.youtube.com/embed/fRz1U3ZqhzE",
                ratio: "16 / 9"
            }
        ],

        features: [
            //#region Features Plie d'avance
            {
                /* 1 */
                title: "Steam Iron behavior",

                description: [
                    "I made the Steam Iron's behavior. This include its movements using mouse sweeping.",

                    "I also added an acceleration and deceleration system to smooth its moving off and give inertia to the rotation. In order to speed the process, I used a RigidBody2D that I customized to respect these rules."
                ],

                media: "images/Projects/PlieDAvance/Gifs/GifsOpti/IronSteamBehaviorGif-opti.gif"
            },

            {
                /* 2 */
                title: "Lava Line",

                description: [
                    "In parallel with Steam Iron's behavior, I did the lava line mecanic.",

                    "Since the line follows the Iron Steam and can kill the second player, I needed to handle all the positions of the line.",

                    "I decided to use a line renderer that I customized in order to add and remove points easily while calculating collision. I added customizable parameters to control the size of the line and the precision of the collision detection."
                ],

                media: "images/Projects/PlieDAvance/Gifs/GifsOpti/LavaLineGif-opti.gif"
            },

            {
                /* 3 */
                title: "Game feel & Juiciness",

                description: [
                    "I added some game feel and juiciness elements. For exemple I added camera shakes and a customizable jump effect for the public.",

                    "Furthermore, I created an easy to use system to smooth UI animations and add transitions that the other programmers and designers worked with."
                ],

                media: "images/Projects/PlieDAvance/Gifs/GifsOpti/GameFeelGif-opti.gif"
            },

            {
                /* 4 */
                title: "Game Loop",

                description: [
                    "I made the game loop system which includes win / lose, scene handling and the game timer.",

                    "In order to make these systems easy to understand I needed to be clear in my organization by adding easy to use events, while being quick in this setup in order to focus on other mecanics."
                ],

                media: "images/Projects/PlieDAvance/Gifs/GifsOpti/GameLoopGif-opti.gif"
            },

            {
                /* 5 */
                title: "Audio System",

                description: [
                    "I finally added an quick and easy to use audio system.",

                    "It allowed the game designers to quickly add their sounds while mixing the in game volume and controlling the randomness of some sounds.",

                    "For this I used the Audio Mixer system of Unity and a lot of Scriptable Objects to gather all sound's data."
                ],

                media: "images/Projects/PlieDAvance/Gifs/GifsOpti/AudioSystemGif-opti.gif"
            }
            //#endregion
        ]

        //#endregion
    },

    {
        //#region Bond
        id: "bond",
        title: "Bond",
        image: "images/Projects/Bond/T_Couverture_Bond.jpg",
        date: "December, 2023",
        details: "Group 3 |  3 weeks | SFML | C++",
        feature: "Physics - Collision - Gameplay - Juiciness",
        categories: ["side"],
        background: "images/Projects/Bond/T_Couverture_Bond.jpg",

        logo: "images/Projects/Bond/T_Couverture_Bond.jpg",

        description: [
            "Bond is a 2D infiltration game in top-down view.",

            "Here you have to kill all your enemies by shooting them without dying to win the game.",

            "This game was made during my second year of game programming studies at IIM.",

            "It's the result of three weeks' work by a team of three game programmer.",

            "This time, we weren't using any game engine and we only used SFML and C++."
        ],

        itch: "",
        
        contribution: [
            "For this project, I worked mainly on the following game mechanics as well as the physics and collision system and the juiciness."
        ],

        gameplayVideos: [
            {
                type: "local",
                url: "images/Projects/Bond/BondDemo.mp4",
                ratio: "16 / 9"
            }
        ],

        features: [
            //#region Features Bond
            {
                /* 1 */
                title: "Collision and Physics",

                description: [
                    "Made the game's collision and physics system.",

                    "The difficulty was that, starting from scratch, it's essentially based on maths.",

                    "This includes managing wall collisions so that nothing can pass through, and that if the player enters the wall, he runs along it.",

                    "The system also includes bullet detection, so that if the bullet hits a wall or an actor, it is destroyed and the actor recovers the information about having been hit."
                ],

                media: "images/Projects/Bond/Gifs/GifsOpti/PortfolioCollisionB-min.gif"
            },

            {
                /* 2 */
                title: "Particle System",

                description: [
                    "Did the basis of a particle system.",

                    "In order to be able to create different bursts, the system must be able to leave many options open, such as particle shape, color, number, lifetime, speed, direction and angle of dispersion.",

                    "This made it possible to add juiciness and create three particle presets for the game: blood when an actor is shot, bullet impact on walls, and sparks from the gun when a bullet is fired."
                ],

                media: "images/Projects/Bond/Gifs/GifsOpti/PortfolioParticleSystemB-min.gif"
            },

            {
                /* 3 */
                title: "Player",

                description: [
                    "Implemented some of the player's behaviors.",

                    "The player can move in eight directions, but he can't walk into walls.",

                    "Furthermore, when the player is hit by a bullet, he takes damage and dies if he has no life points left."
                ],

                media: "images/Projects/Bond/Gifs/GifsOpti/portfolioPlayerB-min.gif"
            },

            {
                /* 4 */
                title: "Victory and Defeat",

                description: [
                    "Finally, the player can win or lose the game.",

                    "He wins if all enemies have been eliminated. This condition is checked every time an enemy dies.",

                    "If the player dies, he loses.",

                    "When the game is over, a menu appears over the entire screen, indicating the end of the game."
                ],

                media: "images/Projects/Bond/Gifs/GifsOpti/PortfolioVictoryDefeatB-min.gif"
            }
            //#endregion
        ]

        //#endregion
    },

    {
        //#region Modding
        id: "modding",
        title: "Modding",
        image: "images/Projects/Modding/T_Couverture_Modding.png",
        date: "November, 2023",
        details: "Solo |  1 month | Modding",
        feature: "Gameplay",
        categories: ["side"],
        background: "images/Projects/Modding/T_Couverture_Modding.png",

        logo: "images/Projects/Modding/T_Logo_Modding.png",

        description: [
            "This project was a part of my second year of studies at IIM.",

            "I decided to mod Hollow Knight to train my skills on a Unity game."
        ],

        itch: "",
        
        contribution: [
            "For this project, I wanted to add new gameplay mechanics to complement the existing ones."
        ],

        gameplayVideos: [
            {
                type: "youtube",
                url: "https://www.youtube.com/embed/Ufh6fchcA4A",
                ratio: "16 / 9"
            }
        ],

        features: [
            //#region Features Modding
            {
                /* 1 */
                title: "Companions",

                description: [
                    "The mechanic that took me the most time was the addition of two companions, the bird and the crawler.",

                    "To do this, I took existing enemy sprites and reworked their entire behavior, so that they're not hostile to the player, but rather follow and help him attack.",

                    "These companions can die, in which case the player must heal to bring them back to life."
                ],

                media: "images/Projects/Modding/Gifs/GifsOpti/portoflioCrawlerBirdHKM-min.gif"
            },

            {
                /* 2 */
                title: "New Attacks",

                description: [
                    "I've added three custom attack combos: teleport attack, dash attack, multiple attack.",

                    "To do this, I took the mechanics already created in the game and turned them into combos.",

                    "The one that required the most attention was the teleportation attack, which requires great precision to keep the combat dynamic and avoid the player crashing into a wall."
                ],

                media: "images/Projects/Modding/Gifs/GifsOpti/portoflioAttacksHKM-min.gif"
            }
            //#endregion
        ]

        //#endregion
    },

    {
        //#region Progtober
        id: "progtober",
        title: "Progtober Prototypes",
        image: "images/Projects/Progtober/T_Couverture_Progtober.png",
        date: "October, 2023",
        details: "Solo |  1 month | Unity | Prototypes",
        feature: "Gameplay - Gamefeel",
        categories: ["side"],
        background: "images/Projects/Progtober/T_Couverture_Progtober.png",

        logo: "images/Projects/Progtober/T_Logo_Progtober.jpg",

        description: [
            "Progtober (programming + october) brings together many different prototypes of gameplay mechanics made in a short period of time.",

            "This project was made during my second year of game programming studies at IIM.",

            "It's the result of a month's solo work. My goal was to explore new game mechanics of all kinds, from car games to fps."
        ],

        itch: "",
        
        contribution: [
            "For this project, I experimented with a lot of mechanics, trying to make some of them more enjoyable by integrating a little more gamefeel."
        ],

        gameplayVideos: [
            {
                type: "youtube",
                url: "https://www.youtube.com/embed/yMbi11FklmI",
                ratio: "16 / 9"
            }
        ],

        features: [
            //#region Features Progtober
            {
                /* 1 */
                title: "Car Controller",

                description: [
                    "Reproduced the basic controls of a racing car.",

                    "To do this, I used Unity's wheel collider. However, I've added a few elements such as visual details (for example, the steering wheel turning), a tire wear syste and localized damage inflicted on the vehicle in the event of impact, which can result in the loss of wheels.",

                    "Moreover, up to two players can control their cars in local mode on the same screen.",

                    "The main difficulty was to find the right values for the vehicle's physics, so as to give a pleasant feeling of control."
                ],

                media: "images/Projects/Progtober/Gifs/GifsOpti/portfolioCarSQ-min.gif"
            },

            {
                /* 2 */
                title: "Fps Controller",

                description: [
                    "Made a basic Fps controller with several additional elements.",

                    "These include the ability to carry different weapons, each with their own particularities (number of bullets, fire's rate, ...), game feel elements such as recoil and reload animations done in code on the revolver, a grenade that can bounce off walls before exploding, bullet impacts on walls and particles that change depending on the nature of the object hit to add feedback."
                ],

                media: "images/Projects/Progtober/Gifs/GifsOpti/portfolioFpsSq-min.gif"
            },

            {
                /* 3 */
                title: "Time Reverse",

                description: [
                    "Did a system to reverse time for a few seconds.",

                    "This system keeps track of the position and rotation of objects, as well as their velocity, so that you can keep track of their movement while having fun going back in time and resetting it.",

                    "As it can't record an infinite amount of data, the ability to go back in time is limited."
                ],

                media: "images/Projects/Progtober/Gifs/GifsOpti/portfolioTimeSq-min.gif"
            },

            {
                /* 4 */
                title: "Procedural Maze and Navigation",

                description: [
                    "Here I wanted to practice with NavMesh in Unity.",

                    "To do this, I first tried to create a maze procedurally, so as to have a good example for testing this system. The maze is created as soon as the game starts.",

                    "I then added a character controlled by Unity's NavMesh system, which will then navigate the character through the maze to the destination selected by my mouse."
                ],

                media: "images/Projects/Progtober/Gifs/GifsOpti/portfolioMazeSQ-min.gif"
            },

            {
                /* 5 */
                title: "Pool",

                description: [
                    "Experimented with 2D physics by making a 2D billiards mini-game.",

                    "The game features balls bouncing off the edges and against each other, a billiard stick that lets you adjust the power and direction of the shot, and a way to make the balls fall into the holes in the table."
                ],

                media: "images/Projects/Progtober/Gifs/GifsOpti/portfolioPoolSq-min.gif"
            },

            {
                /* 6 */
                title: "Various small mechanics",

                description: [
                    "Here I've been practicing some nice mechanics from games I've already seen. There's a ball-throwing system to destroy a building in front of you, the possibility of stacking cubes in a three-dimensional grid, a game of bubbles to connect in order to destroy them, and some experimentation with Unity features that I had just discovered."
                ],

                media: "images/Projects/Progtober/Gifs/GifsOpti/portfolioVariousSq-min.gif"
            },

            {
                /* 7 */
                title: "Side / Top Down Shooter",

                description: [
                    "To keep practicing my ability to reproduce different controllers, I did the basics for a side shooter and a top down shooter.",

                    "This includes player movement and the ability to shoot in a direction.",

                    "However, for the side shooter, I chose to make a static player, inspired by other games."
                ],

                media: "images/Projects/Progtober/Gifs/GifsOpti/portfolioTopSideSq-min.gif"
            }
            //#endregion
        ]
        //#endregion
    },

    {
        //#region  Tiny Mysteries
        id: "tiny-mysteries",
        title: "Tiny Mysteries",
        image: "images/Projects/TinyMysteries/T_Couverture_TinyMysteries.png",
        date: "October, 2023",
        details: "Group 3 |  2 days | Jam | Unity | Puzzle Game",
        feature: "Gameplay - Gamefeel",
        categories: ["side", "jams"],
        background: "images/Projects/TinyMysteries/T_Couverture_TinyMysteries.png",

        logo: "images/Projects/TinyMysteries/T_Couverture_TinyMysteries.png",

        description: [
            "Tiny Mysteries is a 3D puzzle Game. You'll have to venture into three different rooms to escape. Each room has its own puzzle mechanic. How long will it take you to escape ?",

            "This game was made during the 54th LudumDare jam in 2023.",

            "It's the result of two days' work by a team of three game programmers. Our goal was to challenge ourselves by seeing what we could do in a very short time."
        ],

        itch: "https://corentinrmt.itch.io/tiny-mysteries",
        
        contribution: [
            "For this project, I worked mainly on the following game mechanics as well as the game feel."
        ],

        gameplayVideos: [
            {
                type: "youtube",
                url: "https://www.youtube.com/embed/2d1ZzeRSXHc",
                ratio: "16 / 9"
            }
        ],

        features: [
            //#region Features Tiny Mysteries
            {
                /* 1 */
                title: "Inspection System",

                description: [
                    "Programmed the object inspection system.",

                    "All you have to do is define which objects are inspectable, and then you can inspect them in-game. Objects can then be oriented in any direction.",

                    "This mechanic can be found in several of the three levels, as it is necessary for solving the puzzles."
                ],

                media: "images/Projects/TinyMysteries/Gifs/GifsOpti/portfolioInspectionSystemTM-min.gif"
            },

            {
                /* 2 */
                title: "Third Puzzle",

                description: [
                    "Created the third puzzle room and its associated mechanics. This includes the notepad, which records the answers to the puzzle as well as the associated victory conditions.",

                    "The player can enter any of the answers they think are correct, and when the right combination is entered, the puzzle is solved.",

                    "The notepad is also fully navigable using a variant of the inspection system."
                ],

                media: "images/Projects/TinyMysteries/Gifs/GifsOpti/portfolioThirdPuzzleTM-min.gif"
            }
            //#endregion
        ]
        //#endregion
    },

    {
        //#region DartNDustry
        id: "dart-n-dustry",
        title: "Dart N' Dustry",
        image: "images/Projects/DartNDustry/T_Couverture_DartNDustry.png",
        date: "September, 2023",
        details: "Group 9 |  4 days | Jam | Unity",
        feature: "Gameplay - Camera",
        categories: ["side", "jams"],
        background: "images/Projects/DartNDustry/T_Couverture_DartNDustry.png",

        logo: "images/Projects/DartNDustry/T_Couverture_DartNDustry.png",

        description: [
            "Dart N Dustries is a puzzle game where you play as a robot inspector who controls the robots leaving the factory. You must accept the correct robots and reject the failing ones. The correct robots follow a patern described in the game manual.",

            "This game was made during the 2023 Godfather jam.",

            "It's the result of four days' work by a team of nine people :",

            "- 3 game programmers",

            "- 2 game artists",

            "- 3 game designers",

            "- 1 producer"
        ],

        itch: "https://tom-hook.itch.io/dartyndustry",
        
        contribution: [
            "For this project, I worked mainly on the following gameplay mechanics as well as the camera controls."
        ],

        gameplayVideos: [
            {
                type: "local",
                url: "images/Projects/DartNDustry/V_DartNDustry_Gameplay.mp4",
                ratio: "16 / 9"
            }
        ],

        features: [
            //#region Features DartNDustry
            {
                /* 1 */
                title: "Random Robot Generation",

                description: [
                    "I've programmed a random robot generator which creates robots by associating four parts (body, head, ears, arms) each with three variants and a random color code.",

                    "The difficulty resides in the fact that this generator is not completely random, as it is likely that the robot is not malfunctioning and therefore follows a precise pattern described in the game manual.",

                    "The robot then knows whether it is malfunctioning or not when it is generated. This helps to know if the player win or lose points when he's rejecting or accepting the robot."
                ],

                media: "images/Projects/DartNDustry/Gifs/GifsOpti/portfolioRobotGenerationDND-min.gif"
            },

            {
                /* 2 */
                title: "Camera Controls",

                description: [
                    "Participated in the movements of the camera",

                    "This allows to view the entire robot in order not to miss any detail.",

                    "The movement has been made more fluid to keep an eye-pleasing appearance."
                ],

                media: "images/Projects/DartNDustry/Gifs/GifsOpti/portfolioCameraDND-min.gif"
            }
            //#endregion
        ]
        //#endregion
    },

    /* ---- !SIDE ---- */
];