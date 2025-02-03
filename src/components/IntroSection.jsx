export default function IntroSection() {
    return (
      <>
        <div className="text-3xl font-bold">Ashok Basnet</div>
        <div className="italic text-sm">Gwarko, Lalitpur, Nepal.</div>
        <div className="text-xl mt-1">
          <a
            href="https://www.linkedin.com/in/ashok-basnet-790238187/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin cursor-pointer mr-2 px-1"></i>
          </a>
          <a
            href="https://github.com/pycodebook"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github cursor-pointer mr-2 px-1"></i>
          </a>
          <a
            href="mailto:ashok.basnet@ncit.edu.com.np?subject=Hello&body=Hi there!"
            target="_blank"
            aria-label="Email"
          >
            <i className="fa-regular fa-envelope cursor-pointer px-1"></i>
          </a>
        </div>
      </>
    );
  }
  