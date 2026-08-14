import { contactHtml } from "./content";
export default function ContactSection() {
  return <div className="pk-contact-scope" dangerouslySetInnerHTML={{ __html: contactHtml }} />;
}
