import './index.css'

function Header() {
  return (
    <header>
      <div>
        <a
          href="https://github.com/gabriersdev"
          rel="noreferrer noopener"
          data-toggle="tooltip"
          data-placement="top"
          data-bs-custom-class="custom-tooltip"
          title="Eu no GitHub"
        >
          <img src="https://github.com/gabriersdev.png" alt="Selfie de Gabriel" />
        </a>
      </div>
    </header>
  )
}

export { Header }