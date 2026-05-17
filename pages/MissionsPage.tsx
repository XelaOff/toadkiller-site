import React, { useState } from 'react';
import { leaderboard, missions } from '../data/missions';

const fieldClass = 'w-full rounded-2xl border-2 border-[#166534]/25 bg-[#fefce8]/95 px-4 py-3 font-bold text-[#064e3b] outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20';

type ProofFormState = {
  wallet: string;
  telegram: string;
  xHandle: string;
  missionId: string;
  proofLink: string;
  notes: string;
};

const emptyForm: ProofFormState = {
  wallet: '',
  telegram: '',
  xHandle: '',
  missionId: '',
  proofLink: '',
  notes: '',
};

const MissionsPage: React.FC = () => {
  const [formState, setFormState] = useState<ProofFormState>(emptyForm);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const selectedMission = missions.find((mission) => mission.id === formState.missionId);

  const updateField = (field: keyof ProofFormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
    setSubmissionMessage('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionMessage(
      selectedMission
        ? `Proof queued for ${selectedMission.title}. Swamp admins can review this mock submission next.`
        : 'Proof queued. Pick a mission next time so admins can assign ToadX faster.'
    );
    setFormState(emptyForm);
  };

  return (
    <main className="flex-grow pt-32 md:pt-36">
      <section className="container mx-auto px-4 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-8 md:gap-12 items-center">
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-sm font-bungee text-[#166534] shadow-[0_4px_0_#166534]">
              Mission Board MVP
            </div>
            <h1 className="mt-8 font-cartoon text-6xl sm:text-7xl md:text-8xl text-[#166534] drop-shadow-[0_5px_0_#fefce8] uppercase leading-none">
              Complete missions. Earn ToadX. Climb the swamp.
            </h1>
            <p className="mt-6 max-w-3xl text-xl md:text-3xl font-bold leading-snug text-[#fefce8] drop-shadow-[0_2px_0_#064e3b]">
              The $TOAD mission board turns community growth into a clean arcade loop: raid, post, meme, refer, submit proof, and stack Swamp Points.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#submit-proof" className="text-center bg-yellow-400 hover:bg-yellow-300 text-[#166534] font-cartoon text-2xl px-8 py-4 rounded-2xl shadow-[0_6px_0_#166534] active:translate-y-1 active:shadow-none transition-all">
                Submit Proof
              </a>
              <a href="#leaderboard" className="text-center bg-[#fefce8] hover:bg-white text-[#166534] font-cartoon text-2xl px-8 py-4 rounded-2xl border-[3px] border-[#166534] shadow-[0_6px_0_#166534] active:translate-y-1 active:shadow-none transition-all">
                Leaderboard
              </a>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] md:rounded-[3rem] border-[4px] border-[#fefce8]/30 p-6 md:p-8 shadow-2xl">
            <div className="rounded-[1.5rem] bg-[#064e3b]/80 p-6 border-2 border-yellow-400/40">
              <p className="font-marker text-3xl text-yellow-400 drop-shadow-[0_3px_0_#166534]">ToadX / Swamp Points</p>
              <p className="mt-4 text-lg md:text-xl font-bold leading-relaxed text-[#fefce8]">
                ToadX works like arcade tickets for the $TOAD ecosystem. It is an off-chain participation score used to track community contributions before real rewards are distributed manually.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-[#fefce8]/10 p-4">
                  <div className="font-cartoon text-3xl text-yellow-400">0</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#fefce8]/70">On-chain</div>
                </div>
                <div className="rounded-2xl bg-[#fefce8]/10 p-4">
                  <div className="font-cartoon text-3xl text-yellow-400">XP</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#fefce8]/70">Style</div>
                </div>
                <div className="rounded-2xl bg-[#fefce8]/10 p-4">
                  <div className="font-cartoon text-3xl text-yellow-400">Manual</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#fefce8]/70">Rewards</div>
                </div>
              </div>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-green-200/80">
                No token payouts, APIs, gating, or database in this MVP.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10 md:py-16">
        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="font-marker text-3xl text-yellow-400 drop-shadow-[0_3px_0_#166534]">Growth Quests</p>
            <h2 className="font-cartoon text-5xl md:text-7xl text-[#fefce8] drop-shadow-[0_5px_0_#166534] uppercase">Pick a mission</h2>
          </div>
          <p className="max-w-xl text-lg font-bold text-[#fefce8]/85">
            Each card is mocked locally for now, ready to connect to wallet identity, Supabase, and admin review later.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
          {missions.length > 0 ? (
            missions.map((mission) => (
              <article key={mission.id} className="group rounded-[2rem] border-[3px] border-[#166534] bg-[#fefce8] p-5 text-[#064e3b] shadow-[0_8px_0_#166534] transition-all hover:-translate-y-1 hover:shadow-[0_12px_0_#166534]">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-[#166534] px-3 py-1 text-xs font-bungee text-yellow-300">{mission.channel}</span>
                  <span className="font-cartoon text-3xl text-yellow-500 drop-shadow-[0_2px_0_#166534]">{mission.points}</span>
                </div>
                <h3 className="mt-5 font-cartoon text-3xl leading-none uppercase">{mission.title}</h3>
                <p className="mt-4 text-base font-bold leading-relaxed text-[#166534]/85">{mission.description}</p>
                <div className="mt-5 rounded-2xl bg-green-100 p-4">
                  <p className="text-xs font-bungee uppercase tracking-wider text-[#166534]/70">Proof</p>
                  <p className="mt-1 text-sm font-bold text-[#064e3b]">{mission.proofHint}</p>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm font-bungee uppercase text-[#166534]">
                  <span>{mission.difficulty}</span>
                  <span>ToadX</span>
                </div>
              </article>
            ))
          ) : (
            <div className="md:col-span-2 xl:col-span-5 rounded-[2rem] border-[3px] border-[#166534] bg-[#fefce8] p-8 text-center text-[#064e3b] shadow-[0_8px_0_#166534]">
              <p className="font-cartoon text-4xl">No missions posted yet</p>
              <p className="mt-2 font-bold">The swamp board is clear. Add mocked missions in the local data file.</p>
            </div>
          )}
        </div>
      </section>

      <section id="leaderboard" className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <div>
            <p className="font-marker text-3xl text-yellow-400 drop-shadow-[0_3px_0_#166534]">Swamp Ladder</p>
            <h2 className="font-cartoon text-5xl md:text-7xl text-[#fefce8] drop-shadow-[0_5px_0_#166534] uppercase">Leaderboard</h2>
            <p className="mt-5 text-xl font-bold leading-relaxed text-[#fefce8]/85">
              A lightweight mockup for showing who is feeding the community flywheel. Rankings use local placeholder data until submissions are stored and approved.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border-[4px] border-[#fefce8]/25 bg-[#064e3b]/80 shadow-2xl">
            {leaderboard.length > 0 ? (
              leaderboard.map((entry) => (
                <div key={entry.rank} className="grid grid-cols-[44px_1fr] sm:grid-cols-[56px_1fr_auto] items-center gap-3 sm:gap-4 border-b border-[#fefce8]/10 px-4 sm:px-5 py-4 last:border-b-0">
                  <div className="font-cartoon text-3xl sm:text-4xl text-yellow-400">#{entry.rank}</div>
                  <div className="min-w-0">
                    <div className="truncate text-base sm:text-lg font-bungee text-[#fefce8]">{entry.handle}</div>
                    <div className="text-xs sm:text-sm font-bold text-green-200/70">{entry.wallet} - {entry.completed} missions</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 sm:text-right">
                    <div className="font-cartoon text-3xl text-yellow-400">{entry.points}</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#fefce8]/60">ToadX</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center">
                <p className="font-cartoon text-4xl text-yellow-400">No swamp climbers yet</p>
                <p className="mt-2 font-bold text-[#fefce8]/80">Approved missions will show up here once the mock board has entries.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="submit-proof" className="container mx-auto px-4 py-10 md:py-16">
        <div className="glass-panel rounded-[2rem] md:rounded-[3rem] border-[4px] border-[#fefce8]/30 p-6 md:p-10">
          <div className="mb-8">
            <p className="font-marker text-3xl text-yellow-400 drop-shadow-[0_3px_0_#166534]">Proof Booth</p>
            <h2 className="font-cartoon text-5xl md:text-7xl text-[#fefce8] drop-shadow-[0_5px_0_#166534] uppercase">Submit your run</h2>
          </div>
          {submissionMessage && (
            <div className="mb-6 rounded-2xl border-2 border-yellow-400 bg-[#064e3b]/85 p-4 font-bold text-yellow-100">
              {submissionMessage}
            </div>
          )}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={handleSubmit}>
            <label className="font-bold text-[#fefce8]">
              Wallet address
              <input
                className={`${fieldClass} mt-2`}
                placeholder="0x..."
                value={formState.wallet}
                onChange={(event) => updateField('wallet', event.target.value)}
              />
            </label>
            <label className="font-bold text-[#fefce8]">
              Telegram username
              <input
                className={`${fieldClass} mt-2`}
                placeholder="@swampname"
                value={formState.telegram}
                onChange={(event) => updateField('telegram', event.target.value)}
              />
            </label>
            <label className="font-bold text-[#fefce8]">
              X/Twitter username
              <input
                className={`${fieldClass} mt-2`}
                placeholder="@toadmaxi"
                value={formState.xHandle}
                onChange={(event) => updateField('xHandle', event.target.value)}
              />
            </label>
            <label className="font-bold text-[#fefce8]">
              Mission selected
              <select
                className={`${fieldClass} mt-2`}
                value={formState.missionId}
                onChange={(event) => updateField('missionId', event.target.value)}
              >
                <option value="" disabled>Choose a mission</option>
                {missions.map((mission) => (
                  <option key={mission.id} value={mission.id}>{mission.title} - {mission.points} ToadX</option>
                ))}
              </select>
            </label>
            <label className="md:col-span-2 font-bold text-[#fefce8]">
              Proof link
              <input
                className={`${fieldClass} mt-2`}
                placeholder="https://x.com/... or https://t.me/..."
                value={formState.proofLink}
                onChange={(event) => updateField('proofLink', event.target.value)}
              />
            </label>
            <label className="md:col-span-2 font-bold text-[#fefce8]">
              Optional notes
              <textarea
                className={`${fieldClass} mt-2 min-h-32 resize-y`}
                placeholder="Add context for the swamp admins."
                value={formState.notes}
                onChange={(event) => updateField('notes', event.target.value)}
              />
            </label>
            <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-sm font-bold text-[#fefce8]/70">
                UI only for now. No wallet connection, database write, or automated social verification is attached.
              </p>
              <button type="submit" className="bg-yellow-400 hover:bg-yellow-300 text-[#166534] font-cartoon text-2xl px-8 py-4 rounded-2xl shadow-[0_6px_0_#166534] active:translate-y-1 active:shadow-none transition-all">
                Queue Proof
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default MissionsPage;
