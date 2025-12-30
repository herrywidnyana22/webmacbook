import { footerLinks } from "../lib/constants"

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop: Find an Apple Store or other retailer near you. Or call
          0123-4567-8910.
        </p>
        <img src="/images/logo.svg" alt="Apple logo" />
      </div>
      <hr />
      <div className="links">
        <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
        <ul>
          { footerLinks.map((footer) => (
            <li key={footer.label}>
              <a href={footer.link}>{footer.label}</a>
            </li>
          ))

          }
        </ul>
      </div>
    </footer>
  )
}

export default Footer