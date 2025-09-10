import { StoryChapter } from "@shared/schema";

export const storyChapters: StoryChapter[] = [
  {
    id: "start",
    title: "The Interview Gauntlet",
    content: (
      <>
        <p>Welcome, fellow recruiter! You're sitting in your stylish Warsaw office at CD Projekt Red, coffee growing cold, staring at yet another resume. But this one... this one might be different.</p>
        <p>The candidate claims they can "debug code faster than Geralt slays drowners" and has "more creativity than Johnny Silverhand has attitude." Bold claims that need verification.</p>
        <p>Time to put this applicant through the legendary CD Projekt Red hiring process. Every choice you make will determine if this person joins the ranks of game development legends... or gets sent back to making mobile match-3 games.</p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1560472354-8e5bf7b5d72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600",
    imageAlt: "Modern office workspace with computer and coffee",
    choices: [
      {
        id: "choice-technical",
        text: "Start with the technical interview",
        description: "Time to see if they can hack it in the cyberpunk future... or just hack poorly.",
        nextChapterId: "technical-interview",
        keyboardKey: "1"
      },
      {
        id: "choice-creative",
        text: "Test their storytelling abilities",
        description: "Every great RPG needs great stories. Let's see what tales they can weave.",
        nextChapterId: "creative-interview",
        keyboardKey: "2"
      },
      {
        id: "choice-references",
        text: "Call their references",
        description: "Sometimes the best insights come from those who've worked with them before.",
        nextChapterId: "reference-check",
        keyboardKey: "3"
      }
    ]
  },
  {
    id: "technical-interview",
    title: "Jacking into the Matrix",
    content: (
      <>
        <p>You fire up the holographic interview terminal (okay, it's just Zoom, but we can dream). The candidate appears on screen, nervously adjusting their webcam like they're calibrating cybernetic implants.</p>
        <p>"Alright," you say with a grin, "let's see if you can handle the kind of technical challenges that would make even Alt Cunningham sweat. We're going to dive deep into some code architecture."</p>
        <p>The candidate's eyes light up with either excitement or terror. Time to find out which.</p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600",
    imageAlt: "Futuristic computer setup with multiple monitors",
    choices: [
      {
        id: "choice-easy-question",
        text: "Start with a warm-up question",
        description: "How do you optimize a game for both PS5 and a potato PC?",
        nextChapterId: "easy-technical",
        keyboardKey: "1"
      },
      {
        id: "choice-hard-question",
        text: "Jump straight to the deep end",
        description: "Explain how you'd implement real-time ray tracing in a cyberpunk cityscape.",
        nextChapterId: "hard-technical",
        keyboardKey: "2"
      },
      {
        id: "choice-witcher-question",
        text: "Ask about narrative-driven programming",
        description: "How would you code a dialogue system with 47 different conversation paths?",
        nextChapterId: "narrative-technical",
        keyboardKey: "3"
      }
    ]
  },
  {
    id: "creative-interview",
    title: "The Bard's Test",
    content: (
      <>
        <p>You lean back in your chair and pull out your favorite Witcher medallion (yes, you have one on your desk—don't judge). "Time for some creative thinking," you announce.</p>
        <p>"Imagine you're Dandelion—I mean, Jaskier—and you need to pitch a new quest line to our narrative team. But here's the twist: it has to incorporate elements from both The Witcher and Cyberpunk universes."</p>
        <p>The candidate either looks inspired or like they're about to have an existential crisis. Either way, this should be entertaining.</p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600",
    imageAlt: "Creative workspace with art supplies and sketches",
    choices: [
      {
        id: "choice-crossover-story",
        text: "Ask for a Witcher-Cyberpunk crossover",
        description: "What happens when Geralt visits Night City?",
        nextChapterId: "crossover-pitch",
        keyboardKey: "1"
      },
      {
        id: "choice-character-development",
        text: "Test character development skills",
        description: "Create a companion character for either universe.",
        nextChapterId: "character-design",
        keyboardKey: "2"
      },
      {
        id: "choice-moral-dilemma",
        text: "Present a moral choice scenario",
        description: "Design a quest with no clearly 'right' answer.",
        nextChapterId: "moral-choice",
        keyboardKey: "3"
      }
    ]
  },
  {
    id: "reference-check",
    title: "The Investigation Begins",
    content: (
      <>
        <p>Time to channel your inner detective. You crack your knuckles and pick up the phone like you're Geralt tracking down a griffin—except instead of monster tracks, you're following employment history.</p>
        <p>The candidate listed three references: their previous manager, a colleague, and... is that a Twitch streamer? This could get interesting.</p>
        <p>"Time to separate the truth from the embellishments," you mutter, scrolling through their contact list. Every good hire needs proper verification—after all, you don't want to accidentally recruit someone who thinks 'debugging' means removing insects from their keyboard.</p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600",
    imageAlt: "Person making a professional phone call at a desk",
    choices: [
      {
        id: "choice-previous-manager",
        text: "Call the previous manager",
        description: "Start with the most obvious choice—their last boss.",
        nextChapterId: "manager-reference",
        keyboardKey: "1"
      },
      {
        id: "choice-colleague",
        text: "Contact the colleague",
        description: "Sometimes peers give the most honest feedback.",
        nextChapterId: "colleague-reference",
        keyboardKey: "2"
      },
      {
        id: "choice-streamer",
        text: "Call the Twitch streamer",
        description: "This should be... enlightening.",
        nextChapterId: "streamer-reference",
        keyboardKey: "3"
      }
    ]
  },
  {
    id: "easy-technical",
    title: "The Warm-Up Round",
    content: (
      <>
        <p>The candidate takes a deep breath and launches into a surprisingly thorough explanation about scalability, platform-specific optimizations, and something about "making sure the game doesn't melt your grandmother's laptop."</p>
        <p>Not bad! They even threw in a joke about how "optimization is like alchemy—sometimes you need the right ingredients, and sometimes you just hope for the best."</p>
        <p>You're impressed, but this was just the tutorial level. Time to see how they handle the real challenges.</p>
      </>
    ),
    choices: [
      {
        id: "choice-follow-up",
        text: "Ask a follow-up technical question",
        description: "Let's see how deep their knowledge goes.",
        nextChapterId: "advanced-technical",
        keyboardKey: "1"
      },
      {
        id: "choice-switch-creative",
        text: "Switch to creative questions",
        description: "Technical skills are good, but what about imagination?",
        nextChapterId: "creative-switch",
        keyboardKey: "2"
      },
      {
        id: "choice-cultural-fit",
        text: "Test their cultural fit",
        description: "Ask about their favorite RPG moment.",
        nextChapterId: "culture-test",
        keyboardKey: "3"
      }
    ]
  },
  {
    id: "hard-technical",
    title: "The Deep Dive",
    content: (
      <>
        <p>The candidate's eyes widen like they just saw Roach spawn on a rooftop. There's a moment of silence before they start talking about light bouncing algorithms, shader optimization, and GPU memory management.</p>
        <p>Either they really know their stuff, or they're the most convincing technical bluffer since someone claimed they could make Cyberpunk 2077 run smoothly on a PS4 at launch.</p>
        <p>You scribble notes furiously, occasionally nodding like you understand everything (you do, but it's always good to keep them guessing).</p>
      </>
    ),
    choices: [
      {
        id: "choice-impressive",
        text: "They nailed it completely",
        description: "This person knows their ray tracing like Geralt knows his potions.",
        nextChapterId: "technical-success",
        keyboardKey: "1"
      },
      {
        id: "choice-partial",
        text: "Good attempt, some gaps",
        description: "Promising, but needs some work.",
        nextChapterId: "technical-partial",
        keyboardKey: "2"
      },
      {
        id: "choice-concerning",
        text: "That was... concerning",
        description: "They might have confused ray tracing with race tracking.",
        nextChapterId: "technical-failure",
        keyboardKey: "3"
      }
    ]
  },
  {
    id: "narrative-technical",
    title: "Code Meets Story",
    content: (
      <>
        <p>The candidate lights up like a Christmas tree in Novigrad. "Oh, I love this kind of challenge!" they exclaim. "You need a robust dialogue tree system with state management, character relationship tracking, and consequence propagation..."</p>
        <p>They start drawing diagrams (somehow, through the screen), talking about branching narratives, save-state management, and how to make sure players don't accidentally romance their horse.</p>
        <p>You're starting to think this person might actually understand that good RPGs are equal parts solid code and compelling storytelling.</p>
      </>
    ),
    choices: []
  },
  {
    id: "crossover-pitch",
    title: "When Worlds Collide",
    content: (
      <>
        <p>The candidate grins and dives right in: "Picture this—Geralt gets transported to Night City through a botched portal spell. He has to adapt to a world where monsters are replaced by corpo executives and his silver sword doesn't work on cybernetic implants."</p>
        <p>"He teams up with V to track down a rogue mage who's been uploading consciousness into braindances, creating digital wraiths. The whole thing ends with Geralt having to choose between saving Night City or returning to his own world."</p>
        <p>You're trying not to smile too obviously. This is either brilliant or completely insane. Possibly both.</p>
      </>
    ),
    choices: []
  },
  {
    id: "character-design",
    title: "Creating Legends",
    content: (
      <>
        <p>The candidate thinks for a moment, then their face lights up. "I'd create a street kid from Night City who grew up on stories of witchers from old braindances. They've taught themselves basic alchemy using scavenged tech and bootleg chemicals."</p>
        <p>"They can't do real magic, but they've rigged cybernetic implants to mimic witcher signs. Their quest line would be about proving that courage and determination matter more than genetic mutations or fancy corporate enhancements."</p>
        <p>Okay, you're definitely impressed. This person gets character development.</p>
      </>
    ),
    choices: []
  },
  {
    id: "moral-choice",
    title: "The Gray Area",
    content: (
      <>
        <p>The candidate leans forward, getting serious. "Here's the scenario: A corpo exec's child has been kidnapped, but the kidnappers are a group of refugees whose homes were destroyed by that same exec's construction project."</p>
        <p>"The player can: rescue the child and let the refugees face justice, help the refugees escape but leave the child, or try to find a third option that might save everyone but probably won't work perfectly."</p>
        <p>"No matter what you choose, someone suffers. That's what makes it interesting." They sit back with a slight smile. "The best RPG choices should keep players thinking long after they've made them."</p>
      </>
    ),
    choices: []
  },
  {
    id: "manager-reference",
    title: "The Boss's Word",
    content: (
      <>
        <p>You dial the number and get connected to Sarah, the candidate's previous manager. "Oh, them!" she says immediately. "Honestly, one of the best developers I've ever worked with. They once fixed a bug that had been haunting our codebase for months—turns out it was caused by a single misplaced semicolon."</p>
        <p>"They're also ridiculously good at explaining complex technical concepts. Like, they once taught our entire QA team how database optimization works using analogies to organizing a medieval feast."</p>
        <p>Sarah pauses. "Only downside? They have way too many opinions about which Witcher romance option is canon. But honestly, that just shows passion for storytelling."</p>
      </>
    ),
    choices: []
  },
  {
    id: "colleague-reference",
    title: "Peer Review",
    content: (
      <>
        <p>You reach Marcus, a fellow developer who worked alongside the candidate. "Oh yeah, they're solid," he says. "Super collaborative, always willing to help debug someone else's code, and they bring homemade cookies to crunch time sessions."</p>
        <p>"We once had to implement a really complex AI system under a tight deadline. They not only delivered their part early but helped three other team members finish theirs. Plus, they named all the AI variables after Witcher characters, which made the code weirdly fun to work with."</p>
        <p>"Only weird thing about them? They insist on testing every dialogue option in RPGs. Like, every single one. It took them 200 hours to finish our last game because they wanted to see every possible conversation branch."</p>
      </>
    ),
    choices: []
  },
  {
    id: "streamer-reference",
    title: "The Wild Card",
    content: (
      <>
        <p>You call the Twitch streamer, xXCyberWitcher2077Xx, with considerable curiosity. "Dude!" they exclaim. "That candidate is like, legendary in our Discord server. They modded Witcher 3 to add a entire questline about Roach's backstory—and it was actually good!"</p>
        <p>"They also helped me optimize my stream setup when I was having technical issues. Turns out they know as much about broadcast software as they do about game development. Plus, they donated like $500 to my charity stream last year."</p>
        <p>"Oh, and they're the one who figured out that speedrun trick everyone uses now. You know, the one where you use Quen to clip through walls? Yeah, that was them."</p>
        <p>This is... not what you expected from a Twitch streamer reference.</p>
      </>
    ),
    choices: []
  },
  {
    id: "advanced-technical",
    title: "Level Up",
    content: (
      <>
        <p>You decide to push further: "Alright, here's a real scenario from our last project. We had players reporting that loading times were inconsistent—sometimes fast, sometimes glacially slow. How would you approach debugging this?"</p>
        <p>The candidate doesn't hesitate: "First, I'd check if it's hardware-dependent or universal. Then I'd profile the loading sequences to identify bottlenecks. Could be asset streaming, memory fragmentation, or even save-game complexity varying by player choice."</p>
        <p>"I'd also check if certain story branches create more complex game states that take longer to reconstruct. Sometimes the technical and narrative sides of RPGs interact in unexpected ways."</p>
        <p>You nod approvingly. This person definitely knows their stuff.</p>
      </>
    ),
    choices: []
  },
  {
    id: "technical-success",
    title: "The Expert",
    content: (
      <>
        <p>You lean back in your chair, genuinely impressed. This candidate just explained real-time ray tracing with the confidence of someone who's actually implemented it, not just read about it on Stack Overflow.</p>
        <p>They even mentioned specific optimization techniques and talked about balancing visual quality with performance in ways that show deep understanding of both the technical and player experience sides of game development.</p>
        <p>"Well," you say, trying to keep the excitement out of your voice, "I think we might have found our senior graphics programmer."</p>
      </>
    ),
    choices: []
  },
  {
    id: "creative-switch",
    title: "The Plot Twist",
    content: (
      <>
        <p>"Alright, enough technical stuff," you say with a grin. "Time for something completely different. You're designing a side quest for our next RPG. The only requirement is that it has to involve a talking cat and a broken washing machine."</p>
        <p>The candidate blinks, then starts laughing. "Okay, so the talking cat is actually a polymorphed sorcerer who got stuck mid-transformation when their magical washing machine—used for enchanting robes—exploded. The player has to gather specific components to repair both the machine and reverse the spell."</p>
        <p>"But here's the twist," they continue, "the cat has been enjoying the simple life and isn't sure they want to change back. The player has to decide whether to respect their choice or convince them to return to their old life."</p>
        <p>You scribble notes. This person can think on their feet.</p>
      </>
    ),
    choices: []
  }
];