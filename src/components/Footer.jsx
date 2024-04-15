import  DynamicFooter  from "./DynamicComponents";
import links from '../components/data/footersData.json';

export default function Footer() {
    return (
        <footer className="PuntoGiro-Footer">
            <DynamicFooter links={links.footerAside} />
        </footer>
    )
}
