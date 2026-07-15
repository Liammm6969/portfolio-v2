import { GitHubCalendar } from 'react-github-calendar'
import 'react-github-calendar/tooltips.css'
import { GITHUB_PROFILE_URL, GITHUB_USERNAME } from '../data/profile.ts'

const contributionTheme = {
  dark: ['#121212', '#1a2e24', '#245a3a', '#3a8f5c', '#5cb87a'],
  light: ['#121212', '#1a2e24', '#245a3a', '#3a8f5c', '#5cb87a'],
}

export default function GitHubContributionsSection() {
  return (
    <section className="github-section" aria-label="GitHub contributions">
      <div className="github-inner">
        <header className="github-header">
          <div>
            <h2>GitHub Activity</h2>
            <p>A snapshot of my recent open-source and project contributions.</p>
          </div>
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            View profile on GitHub
          </a>
        </header>

        <div className="github-card">
          <div className="github-calendar-wrap">
            <GitHubCalendar
              username={GITHUB_USERNAME}
              colorScheme="dark"
              theme={contributionTheme}
              blockSize={12}
              blockMargin={4}
              blockRadius={3}
              fontSize={12}
              errorMessage={`Unable to load contribution data for ${GITHUB_USERNAME}.`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
