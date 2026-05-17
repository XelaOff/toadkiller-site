export type Mission = {
  id: string;
  title: string;
  channel: string;
  points: number;
  difficulty: 'Easy' | 'Medium' | 'Spicy';
  description: string;
  proofHint: string;
};

export type LeaderboardEntry = {
  rank: number;
  handle: string;
  wallet: string;
  points: number;
  completed: number;
};

export type MissionSubmission = {
  id: string;
  wallet: string;
  telegram: string;
  xHandle: string;
  mission: string;
  proof: string;
  notes: string;
  points: number;
  submittedAt: string;
};

export const missions: Mission[] = [
  {
    id: 'x-raid',
    title: 'Repost / raid on X',
    channel: 'X Growth',
    points: 75,
    difficulty: 'Easy',
    description: 'Boost an official $TOAD post, bring swamp energy, and help the feed discover the hunt.',
    proofHint: 'Link to your repost, quote, or raid reply.',
  },
  {
    id: 'official-comment',
    title: 'Comment on official $TOAD posts',
    channel: 'Community Signal',
    points: 50,
    difficulty: 'Easy',
    description: 'Drop a clean, funny, crypto-native comment on official $TOAD content.',
    proofHint: 'Link to the comment or screenshot post.',
  },
  {
    id: 'meme-submit',
    title: 'Submit a meme',
    channel: 'Meme Factory',
    points: 125,
    difficulty: 'Spicy',
    description: 'Cook up a swamp-grade meme the community can repost, remix, and rally around.',
    proofHint: 'Link to your meme post, image, or public folder.',
  },
  {
    id: 'refer-holder',
    title: 'Refer a new holder/community member',
    channel: 'Flywheel',
    points: 150,
    difficulty: 'Medium',
    description: 'Bring a real new member into the pond and help them find the official channels.',
    proofHint: 'Telegram intro, X mention, or referral note.',
  },
  {
    id: 'telegram-activity',
    title: 'Join Telegram activity',
    channel: 'Telegram',
    points: 40,
    difficulty: 'Easy',
    description: 'Show up in chat, welcome newcomers, answer basics, or add useful swamp chatter.',
    proofHint: 'Message link, screenshot, or short activity note.',
  },
];

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, handle: '@SwampCaller', wallet: '0x8a3...91f', points: 1880, completed: 19 },
  { rank: 2, handle: '@FlywheelFren', wallet: '0x71d...aa2', points: 1515, completed: 16 },
  { rank: 3, handle: '@ArcadeToad', wallet: '0x42c...7be', points: 1330, completed: 14 },
  { rank: 4, handle: '@MemeMarsh', wallet: '0xf09...120', points: 980, completed: 10 },
  { rank: 5, handle: '@RaidPad', wallet: '0x65b...e41', points: 790, completed: 8 },
];

export const pendingSubmissions: MissionSubmission[] = [
  {
    id: 'SUB-1042',
    wallet: '0x8a31dB04fA...091f',
    telegram: '@swampcaller',
    xHandle: '@SwampCaller',
    mission: 'Submit a meme',
    proof: 'x.com/SwampCaller/status/1042',
    notes: 'Original meme template for raid day.',
    points: 125,
    submittedAt: '2026-05-16 18:44',
  },
  {
    id: 'SUB-1041',
    wallet: '0x71d43a94E2...0aa2',
    telegram: '@flywheelfren',
    xHandle: '@FlywheelFren',
    mission: 'Refer a new holder/community member',
    proof: 't.me/The_Toadkiller/8842',
    notes: 'Brought two new members into Telegram.',
    points: 150,
    submittedAt: '2026-05-16 17:21',
  },
  {
    id: 'SUB-1040',
    wallet: '0x42c99191A0...77be',
    telegram: '@arcadetoad',
    xHandle: '@ArcadeToad',
    mission: 'Repost / raid on X',
    proof: 'x.com/ArcadeToad/status/1040',
    notes: 'Quote repost with contract link.',
    points: 75,
    submittedAt: '2026-05-16 15:08',
  },
];
