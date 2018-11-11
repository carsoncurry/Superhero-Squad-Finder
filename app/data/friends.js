// application's data should be saved within `app/data/friends.js`
// it should be saved as an array of ojects

var squadArray = [
    {
        name: 'Justice League',
        description: "You're the best of the best, which means that you only work with the world's greatest superheroes. Don't think you've got it easy because you have the likes of Superman, Wonder Woman and the Flash backing you up, you're about to face a daily deluge of alien invaders, immortal conquerors and legions of doom.",
        profilePic: 'https://www.dccomics.com/sites/default/files/NewJustice_header_5b184ee2a95fb1.82502763.jpg',
        scores: [
            '5',
            '3',
            '5',
            '3',
            '1',
            '2',
            '1',
            '2',
            '3',
            '1'
        ]
    },
    {
        name: 'The Avengers',
        description: "Welcome to Earth's Mightiest Heroes, the only team that includes the world's greatest superheroes AND most famous celebrities. Sure, you'll get the jet and the StarkTech and get to hang out with Captain America and Thor, but you're about to go up against time travelers, malicious A.I.s and the baddest bad of them all: Thanos.",
        profilePic: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2018/02/Marvel-Heroes-Spider-Man-Avengers-Defenders-X-Men.jpg?q=50&fit=crop&w=798&h=407&dpr=1.5',
        scores: [
            '1',
            '4',
            '4',
            '2',
            '2',
            '4',
            '2',
            '3',
            '2',
            '2'
        ]
    },
    {
        name: 'Teen Titans',
        description: "No offense, but you're basically a sidekick. But no worries, because there's a team of like-minded and inexperienced kids ready to take you in. Hanging out with the Teen Titans is like joining a study group, except instead of studying for midterms you'll be taking on merceless mercenaries, blood cults and the king of hell himself.",
        profilePic: 'http://www.comicsbeat.com/wp-content/uploads/2016/11/TeenTitans-Banner.jpg',
        scores: [
            '4',
            '3',
            '1',
            '4',
            '3',
            '2',
            '3',
            '3',
            '3',
            '1'
        ]
    },
    {
        name: 'Fantastic Four',
        description: "Don't worry about the team name, there's usually more than a quartet hanging around the Baxter Building. Simply put you are a scientific marvel, and you're about to undertake a journey into the unknown. Just avoid Latverian dictators and planet-eating giants, they hate you guys.",
        profilePic: 'https://i.kinja-img.com/gawker-media/image/upload/s--DwGvHaq1--/c_scale,f_auto,fl_progressive,q_80,w_800/nm94kekvlefckncexlf9.png',
        scores: [
            '1',
            '5',
            '4',
            '5',
            '1',
            '2',
            '2',
            '1',
            '1',
            '1'
        ]
    },
    {
        name: 'Justice League Dark',
        description: "We're guessing that some arcane rituals were invoked to give you your superpowers. Don't worry if you have a bit of the devil in you or got turned into a vampire some years back (you wouldn't be the first of either), this group of paranormal detectives is ready and willing to take on all sorts of sorcerers, demons and the legions of the undead, zombie or otherwise.",
        profilePic: 'https://nerdist.com/wp-content/uploads/2016/08/Justice-League-Dark-2.jpg',
        scores: [
            '2',
            '1',
            '3',
            '2',
            '4',
            '4',
            '4',
            '4',
            '5',
            '3'
        ]
    },
    {
        name: 'X-Men',
        description: "You are a mutant, the next stage in human evolution and therefore hated and feared by the world at large. Usually we'd understand if you had a giant chip on your shoulder for this, but someone's got to go out there and make things safe for mutants everywhere. Just keep an eye out for some mutant supremacists, giant robots and even your own clone. There is going to be A LOT of clones.",
        profilePic: 'http://www.austinbooks.com/wp-content/uploads/2017/04/bookclub_astonishingx-men.jpg',
        scores: [
            '3',
            '5',
            '2',
            '4',
            '5',
            '1',
            '3',
            '4',
            '1',
            '2'
        ]
    },
    {
        name: 'Suicide Squad',
        description: "Okay, maybe the world 'superhero' is stretching it, because judging by what we're seeing here you're kind of a dick. That's not to say you can't be useful when an even worse villain shows up. All you have to do is go on some missions that will likely result in heavy casualties and your freedom is yours. Don't worry about the explosive chip we put in your neck...",
        profilePic: 'https://www.slashfilm.com/wp/wp-content/images/Suicide-Squad.jpg',
        scores: [
            '2',
            '3',
            '2',
            '1',
            '5',
            '5',
            '2',
            '4',
            '3',
            '4'
        ]
    },
    {
        name: 'The Defenders',
        description: "How's a trip to Hell's Kitchen sound? Well, it better sound good because that's where your new team of street-level heroes likes to operate. Sure you guys aren't the most powerful, but at least you get paid for your services. Just mentally prepare yourself for ninjas. It's basically all-ninja clans 24-7 for you guys.",
        profilePic: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2017/08/defenders-tiene-comic-estas-son-sus-claves.jpg?itok=JhKDpdT3',
        scores: [
            '4',
            '3',
            '4',
            '4',
            '4',
            '4',
            '5',
            '4',
            '3',
            '2'
        ]
    },
    {
        name: 'The Doom Patrol',
        description: "Sorry to be blunt, but you're kind of a weirdo. Not that there's anything wrong with that! It's just that you deserve a group that understands you deep down. Sure you're going to have trouble going out in public now and when you do it's usually to fight some dimension-eating performance artists but it certainly won't be boring.",
        profilePic: 'https://nerdist.com/wp-content/uploads/2018/05/Doom_Patrol_Omnibus_Textless.jpg',
        scores: [
            '3',
            '4',
            '3',
            '4',
            '4',
            '2',
            '3',
            '5',
            '2',
            '2'
        ]
    },
    {
        name: 'Guardians of the Galaxy',
        description: "Good job! You've technically followed the law to only be considered a 'petty criminal' instead of a full-blown supervillain. And hey, it says here you're looking for adventures as far off as distant galaxies. There's no way you won't have a good time cruising the starways listening to tunes, fighting living planets (who may be your dad), angsty cyborgs (who may be your sister) and mad titans (who also may be your dad).",
        profilePic: 'https://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2017/04/guardians_reading_list_primary.jpg?itok=5BPHzu51',
        scores: [
            '1',
            '5',
            '2',
            '4',
            '3',
            '5',
            '1',
            '4',
            '2',
            '3'
        ]
    },
    {
        name: 'Teenage Mutant Ninja Turtles',
        description: "Totally radical! Whether you're a leader, someone who's rude but cool, someone who does machines or a real party dude we've got a spot for you...as long as you're a turtle who's also a teenage and a mutant who happens to be a ninja. Sure, you have to live in the sewers, but there's as much pizza as you can eat bro!",
        profilePic: 'https://img1.looper.com/img/gallery/things-only-adults-notice-in-the-teenage-mutant-ninja-turtles-cartoon/intro-1519911106.jpg',
        scores: [
            '3',
            '5',
            '2',
            '5',
            '4',
            '1',
            '5',
            '4',
            '2',
            '1'
        ]
    },
    {
        name: 'Bureau for Paranormal Research and Defense',
        description: "It says here that you're perfect for government work, especially the kind that lets you take on all sorts of monsters such as Nazis, elder gods, Nazis, mad warlocks and even sometimes Nazis. So what if you're probably a monster yourself? At least you get to punch a Nazi in the face, and who doesn't want that?",
        profilePic: 'https://cdn.vox-cdn.com/thumbor/l4b1kvDbwX2qt1rFHQ8ZDE_3Jes=/0x0:1000x677/920x613/filters:focal(420x340:580x500):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/56039711/4sxPNUD.0.jpg',
        scores: [
            '1',
            '2',
            '4',
            '2',
            '4',
            '3',
            '3',
            '4',
            '5',
            '1'
        ]
    },
    {
        name: 'Legion of Doom',
        description: "Hey, you're no hero at all! In fact, we may think you're actually a full blown superVILLAIN. Well, at least there's always a large assortment of criminals, crooks and creeps for you to join in your attempts to take over the world. But before you jump on 'Team Villain' right away, just remember how many superhero squads there are waiting to meet you...",
        profilePic: 'https://revengeofthefans.com/wp-content/uploads/2018/01/lsuby6f_orig.jpg',
        scores: [
            '1',
            '3',
            '3',
            '3',
            '5',
            '5',
            '1',
            '5',
            '3',
            '5'
        ]
    }
]

module.exports = squadArray;