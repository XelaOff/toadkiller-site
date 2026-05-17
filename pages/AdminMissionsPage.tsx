import React, { useState } from 'react';
import { type MissionSubmission, pendingSubmissions } from '../data/missions';
import { getRouteHref } from '../utils/routes';

type ReviewStatus = 'pending' | 'approved' | 'rejected';
type ReviewSubmission = MissionSubmission & {
  status: ReviewStatus;
};

const statusClass: Record<ReviewStatus, string> = {
  pending: 'bg-yellow-400 text-[#064e3b]',
  approved: 'bg-green-400 text-[#064e3b]',
  rejected: 'bg-[#fefce8] text-[#166534]',
};

const AdminMissionsPage: React.FC = () => {
  const [submissions, setSubmissions] = useState<ReviewSubmission[]>(
    pendingSubmissions.map((submission) => ({ ...submission, status: 'pending' }))
  );
  const pendingCount = submissions.filter((submission) => submission.status === 'pending').length;
  const totalPendingPoints = submissions.reduce(
    (sum, submission) => submission.status === 'pending' ? sum + submission.points : sum,
    0
  );

  const setReviewStatus = (id: string, status: ReviewStatus) => {
    setSubmissions((current) =>
      current.map((submission) =>
        submission.id === id ? { ...submission, status } : submission
      )
    );
  };

  return (
    <main className="flex-grow pt-32 md:pt-36">
      <section className="container mx-auto px-4 pb-10 md:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="inline-flex rounded-full bg-yellow-400 px-4 py-2 text-sm font-bungee text-[#166534] shadow-[0_4px_0_#166534]">
              Admin Shell
            </div>
            <h1 className="mt-8 font-cartoon text-6xl md:text-8xl text-[#166534] drop-shadow-[0_5px_0_#fefce8] uppercase leading-none">
              Mission approvals
            </h1>
            <p className="mt-5 max-w-3xl text-xl md:text-2xl font-bold leading-relaxed text-[#fefce8] drop-shadow-[0_2px_0_#064e3b]">
              A front-end-only command table for reviewing proof, assigning ToadX, and keeping the swamp quest loop tidy before Supabase and auth exist.
            </p>
          </div>
          <a href={getRouteHref('/missions')} className="self-start lg:self-auto bg-[#fefce8] hover:bg-white text-[#166534] font-cartoon text-2xl px-8 py-4 rounded-2xl border-[3px] border-[#166534] shadow-[0_6px_0_#166534] active:translate-y-1 active:shadow-none transition-all">
            View Missions
          </a>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-[2rem] border-[3px] border-[#166534] bg-[#fefce8] p-6 text-[#064e3b] shadow-[0_8px_0_#166534]">
            <p className="font-bungee text-sm uppercase tracking-widest text-[#166534]/70">Pending</p>
            <p className="mt-2 font-cartoon text-6xl text-[#166534]">{pendingCount}</p>
          </div>
          <div className="rounded-[2rem] border-[3px] border-[#166534] bg-[#fefce8] p-6 text-[#064e3b] shadow-[0_8px_0_#166534]">
            <p className="font-bungee text-sm uppercase tracking-widest text-[#166534]/70">Queued ToadX</p>
            <p className="mt-2 font-cartoon text-6xl text-[#166534]">{totalPendingPoints}</p>
          </div>
          <div className="rounded-[2rem] border-[3px] border-[#166534] bg-yellow-400 p-6 text-[#064e3b] shadow-[0_8px_0_#166534]">
            <p className="font-bungee text-sm uppercase tracking-widest text-[#166534]/70">Mode</p>
            <p className="mt-2 font-cartoon text-5xl text-[#166534]">Mocked</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="glass-panel overflow-hidden rounded-[2rem] md:rounded-[3rem] border-[4px] border-[#fefce8]/30 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#fefce8]/20 p-6 md:p-8">
            <div>
              <p className="font-marker text-3xl text-yellow-400 drop-shadow-[0_3px_0_#166534]">Pending Submissions</p>
              <h2 className="font-cartoon text-4xl md:text-6xl text-[#fefce8] drop-shadow-[0_4px_0_#166534] uppercase">Review queue</h2>
            </div>
            <p className="max-w-md text-sm font-bold uppercase tracking-[0.16em] text-[#fefce8]/70">
              Approve and reject controls are UI only in this MVP.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[980px] w-full text-left">
              <thead className="bg-[#064e3b]/90 text-xs font-bungee uppercase tracking-widest text-yellow-300">
                <tr>
                  <th className="px-5 py-4">Submission</th>
                  <th className="px-5 py-4">Member</th>
                  <th className="px-5 py-4">Mission</th>
                  <th className="px-5 py-4">Proof</th>
                  <th className="px-5 py-4 text-right">Total points</th>
                  <th className="px-5 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {submissions.length > 0 ? (
                  submissions.map((submission) => (
                    <tr key={submission.id} className={`border-t border-[#fefce8]/10 text-[#fefce8] ${submission.status === 'pending' ? 'bg-[#064e3b]/55' : 'bg-[#064e3b]/35'}`}>
                      <td className="px-5 py-5 align-top">
                        <div className="font-bungee text-yellow-300">{submission.id}</div>
                        <div className="mt-1 text-sm font-bold text-green-100/70">{submission.submittedAt}</div>
                        <div className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-bungee uppercase ${statusClass[submission.status]}`}>
                          {submission.status}
                        </div>
                      </td>
                      <td className="px-5 py-5 align-top">
                        <div className="font-bold">{submission.xHandle}</div>
                        <div className="text-sm text-green-100/70">{submission.telegram}</div>
                        <div className="mt-1 text-xs font-bold text-green-100/50">{submission.wallet}</div>
                      </td>
                      <td className="px-5 py-5 align-top">
                        <div className="font-bold">{submission.mission}</div>
                        <div className="mt-1 max-w-xs text-sm text-green-100/70">{submission.notes}</div>
                      </td>
                      <td className="px-5 py-5 align-top">
                        <div className="max-w-[240px] truncate rounded-full bg-[#fefce8]/10 px-3 py-2 text-sm font-bold text-yellow-200">
                          {submission.proof}
                        </div>
                      </td>
                      <td className="px-5 py-5 text-right align-top">
                        <div className="font-cartoon text-4xl text-yellow-400">{submission.points}</div>
                        <div className="text-xs font-bold uppercase tracking-widest text-green-100/60">ToadX</div>
                      </td>
                      <td className="px-5 py-5 align-top">
                        <div className="flex justify-end gap-2">
                          <button
                            className={`rounded-xl px-4 py-3 font-cartoon text-lg shadow-[0_4px_0_#166534] transition active:translate-y-1 active:shadow-none ${submission.status === 'approved' ? 'bg-green-300 text-[#064e3b]' : 'bg-green-400 text-[#064e3b]'}`}
                            onClick={() => setReviewStatus(submission.id, 'approved')}
                            type="button"
                          >
                            Approve
                          </button>
                          <button
                            className={`rounded-xl px-4 py-3 font-cartoon text-lg shadow-[0_4px_0_#166534] transition active:translate-y-1 active:shadow-none ${submission.status === 'rejected' ? 'bg-yellow-200 text-[#166534]' : 'bg-[#fefce8] text-[#166534]'}`}
                            onClick={() => setReviewStatus(submission.id, 'rejected')}
                            type="button"
                          >
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="border-t border-[#fefce8]/10 bg-[#064e3b]/55 text-[#fefce8]">
                    <td className="px-5 py-12 text-center" colSpan={6}>
                      <p className="font-cartoon text-4xl text-yellow-400">No pending proof runs</p>
                      <p className="mt-2 font-bold text-[#fefce8]/75">New mission submissions will appear here once the mock queue has data.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminMissionsPage;
