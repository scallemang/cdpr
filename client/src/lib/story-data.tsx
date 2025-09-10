import { StoryChapter } from "@shared/schema";

export const storyChapters: StoryChapter[] = [
  {
    id: "start",
    title: "The Beginning",
    content: (
      <>
        <p>Welcome to your adventure! You find yourself standing at the edge of a vast, mysterious world filled with wonder and danger.</p>
        <p>The sun is setting behind rolling hills, casting long shadows across the landscape. In the distance, you can see three distinct paths that beckon to different destinies.</p>
        <p>Your journey begins now. Every choice you make will shape your story and determine your fate.</p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600",
    imageAlt: "A scenic landscape at sunset with rolling hills and paths",
    choices: [
      {
        id: "choice-forest",
        text: "Enter the enchanted forest",
        description: "The trees whisper ancient secrets, but darkness lurks within.",
        nextChapterId: "forest",
        keyboardKey: "1"
      },
      {
        id: "choice-mountains",
        text: "Climb the misty mountains",
        description: "A challenging path that promises great rewards for the brave.",
        nextChapterId: "mountains",
        keyboardKey: "2"
      },
      {
        id: "choice-village",
        text: "Visit the nearby village",
        description: "Seek wisdom and supplies from the local inhabitants.",
        nextChapterId: "village",
        keyboardKey: "3"
      }
    ]
  },
  {
    id: "forest",
    title: "The Enchanted Forest",
    content: (
      <>
        <p>The ancient trees tower above you, their gnarled branches forming a canopy so thick that only scattered beams of golden sunlight penetrate to the forest floor. Moss covers everything in sight, creating a carpet of emerald green that muffles your footsteps.</p>
        <p>As you venture deeper into the woods, you notice something peculiar. The air shimmers with an otherworldly energy, and you can hear faint whispers carried on the wind. Your heart races as you realize this is no ordinary forest.</p>
        <p>Ahead, the path splits into three distinct routes. Each seems to lead to a different destiny, and you can sense that your choice here will shape the remainder of your journey.</p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600",
    imageAlt: "A mystical forest with towering trees and filtered sunlight",
    choices: [
      {
        id: "choice-mushrooms",
        text: "Take the left path toward the glowing mushrooms",
        description: "The bioluminescent fungi pulse with an enchanting blue light, suggesting magical properties.",
        nextChapterId: "mushroom-grove",
        keyboardKey: "1"
      },
      {
        id: "choice-main-path",
        text: "Continue straight down the main path",
        description: "The well-worn path seems safer, though ancient symbols are carved into nearby trees.",
        nextChapterId: "ancient-ruins",
        keyboardKey: "2"
      },
      {
        id: "choice-rocky-outcrop",
        text: "Climb the rocky outcrop to the right",
        description: "A challenging climb that might offer a better view of the surrounding area.",
        nextChapterId: "forest-overlook",
        keyboardKey: "3"
      }
    ]
  },
  {
    id: "mountains",
    title: "The Misty Mountains",
    content: (
      <>
        <p>The mountain path winds steeply upward, each step taking you higher into the clouds. The air grows thin and cold, but the view becomes more spectacular with every turn.</p>
        <p>Ancient stone markers line the path, covered in symbols you don't recognize. The mist swirls around you, sometimes revealing glimpses of vast chasms and hidden valleys.</p>
        <p>As you pause to catch your breath, you notice three different routes ahead.</p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1464822759350-2cd9b68f8ad3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600",
    imageAlt: "Misty mountain peaks with winding paths",
    choices: [
      {
        id: "choice-cave",
        text: "Explore the mysterious cave",
        description: "A dark opening in the mountainside beckons with unknown secrets.",
        nextChapterId: "mountain-cave",
        keyboardKey: "1"
      },
      {
        id: "choice-peak",
        text: "Continue to the summit",
        description: "The challenging climb to the highest peak awaits.",
        nextChapterId: "mountain-peak",
        keyboardKey: "2"
      },
      {
        id: "choice-bridge",
        text: "Cross the ancient stone bridge",
        description: "A weathered bridge spans a deep gorge, leading to unknown lands.",
        nextChapterId: "stone-bridge",
        keyboardKey: "3"
      }
    ]
  },
  {
    id: "village",
    title: "The Village of Elderbrook",
    content: (
      <>
        <p>The quaint village of Elderbrook sits nestled in a peaceful valley, smoke rising from chimneys and the sound of daily life filling the air. Cobblestone streets wind between thatched-roof houses, and friendly faces peer out from windows.</p>
        <p>The village elder approaches you with a warm smile, offering wisdom and supplies for your journey. The local blacksmith's hammer rings against anvil, and the aroma of fresh bread wafts from the bakery.</p>
        <p>You have several options for how to spend your time in this welcoming place.</p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600",
    imageAlt: "A peaceful village with cobblestone streets and thatched roofs",
    choices: [
      {
        id: "choice-elder",
        text: "Speak with the village elder",
        description: "Seek ancient wisdom and learn about the dangers ahead.",
        nextChapterId: "elder-wisdom",
        keyboardKey: "1"
      },
      {
        id: "choice-blacksmith",
        text: "Visit the blacksmith",
        description: "Acquire better equipment for your journey.",
        nextChapterId: "blacksmith-shop",
        keyboardKey: "2"
      },
      {
        id: "choice-tavern",
        text: "Rest at the tavern",
        description: "Gather information from travelers and restore your strength.",
        nextChapterId: "village-tavern",
        keyboardKey: "3"
      }
    ]
  },
  {
    id: "mushroom-grove",
    title: "The Luminescent Grove",
    content: (
      <>
        <p>You enter a clearing filled with enormous, glowing mushrooms that pulse with ethereal blue light. The air here feels electric with magic, and you sense that these fungi are far more than they appear.</p>
        <p>As you approach, the mushrooms seem to respond to your presence, their glow intensifying. You realize that this grove might hold the key to understanding the forest's mysteries.</p>
      </>
    ),
    choices: []
  },
  {
    id: "ancient-ruins",
    title: "The Ancient Ruins",
    content: (
      <>
        <p>The path leads to the crumbling remains of what was once a magnificent temple. Vines have overtaken the stone structures, but the ancient carvings are still visible, telling stories of a civilization long forgotten.</p>
        <p>You feel a sense of reverence as you explore these sacred grounds, knowing that you are walking where heroes and legends once stood.</p>
      </>
    ),
    choices: []
  },
  {
    id: "forest-overlook",
    title: "The Forest Overlook",
    content: (
      <>
        <p>After a difficult climb, you reach a rocky outcrop that provides a breathtaking view of the entire enchanted forest. From this vantage point, you can see the layout of the land and plan your next moves wisely.</p>
        <p>The climb was worth it—you now have valuable knowledge about the geography of this mystical realm.</p>
      </>
    ),
    choices: []
  },
  {
    id: "mountain-cave",
    title: "The Crystal Cave",
    content: (
      <>
        <p>Inside the cave, you discover walls lined with glowing crystals that illuminate the cavern with rainbow light. The beauty is overwhelming, and you sense that these crystals possess great power.</p>
        <p>Your journey through the mountains has led you to a treasure beyond your wildest dreams.</p>
      </>
    ),
    choices: []
  },
  {
    id: "mountain-peak",
    title: "The Summit",
    content: (
      <>
        <p>You reach the highest peak and stand atop the world. The view stretches endlessly in all directions, and you feel a profound sense of accomplishment. The journey has changed you, and you are no longer the same person who began this adventure.</p>
        <p>At the summit, you find an ancient shrine with a mysterious artifact that pulses with power.</p>
      </>
    ),
    choices: []
  },
  {
    id: "stone-bridge",
    title: "The Bridge of Echoes",
    content: (
      <>
        <p>The ancient stone bridge stretches across a deep gorge, and as you cross, you hear echoes of voices from ages past. Each step resonates with history, and you feel connected to all who have made this crossing before you.</p>
        <p>On the other side, a new realm awaits—one filled with different challenges and opportunities.</p>
      </>
    ),
    choices: []
  },
  {
    id: "elder-wisdom",
    title: "Words of Wisdom",
    content: (
      <>
        <p>The village elder shares ancient knowledge about the lands beyond, warning you of dangers but also revealing hidden paths to safety. Their words will guide you through the challenges ahead.</p>
        <p>Armed with this wisdom, you feel more prepared for whatever lies ahead on your journey.</p>
      </>
    ),
    choices: []
  },
  {
    id: "blacksmith-shop",
    title: "The Master's Forge",
    content: (
      <>
        <p>The blacksmith crafts you a fine blade and sturdy armor, each piece made with skill passed down through generations. The quality of the equipment will serve you well in the trials to come.</p>
        <p>With your new gear, you feel confident and ready to face any challenge that awaits.</p>
      </>
    ),
    choices: []
  },
  {
    id: "village-tavern",
    title: "The Wanderer's Rest",
    content: (
      <>
        <p>In the warm, welcoming tavern, you meet other travelers who share tales of their adventures. Their stories provide valuable insights and warnings about the paths ahead.</p>
        <p>Well-rested and informed, you feel ready to continue your journey with renewed purpose and direction.</p>
      </>
    ),
    choices: []
  }
];
