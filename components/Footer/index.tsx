import logo from "@/assets/logo/horizontal-logo-1.svg";
import { useTranslations } from "next-intl";
import MailchimpForm from "./MailchimpForm";
import { Link } from "@/navigation";

const footer_items = ["termos", "protecao", "faq"];

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <div>
      <MailchimpForm />
      <div className="bg-beige">
        <div className=" container flex  flex-wrap justify-between items-center py-7 md:py-10 ">
          <div className="mb-5 md:mb-8 xl:mb-0">
            <img src={logo.src} className="w-48" />
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 md:gap-x-2 lg:gap-x-0">
            <ul className="mr-10 lg:mr-20 mb-3">
              <li className="text-xs uppercase mb-1">{t("redes-sociais")}</li>
              <li className="text-xs font-extralight mb-1">
                <a href="https://www.facebook.com/CasadoEido">Facebook</a>
              </li>
              <li className="text-xs font-extralight mb-1">
                <a href="https://www.instagram.com/casadoeido.geres/">
                  Instagram
                </a>
              </li>
              <li className="text-xs font-extralight mb-1">
                <a href="https://open.spotify.com/user/mherfhgkno3ek07259uj99bmy?si=EBlj-t1vQDeCdxXWJYMc3A&nd=1&dlsi=f623da9d392e426e">
                  Spotify
                </a>
              </li>
              <li className="text-xs font-extralight mb-1">
                <a href="https://wa.me/351967750506">Whatsapp</a>
              </li>
            </ul>

            <ul className="mr-10 lg:mr-20 mb-3">
              <li className="text-xs uppercase mb-1">{t("contactos")}</li>
              <li className="text-xs font-extralight mb-1">+351 967 750 506</li>
              <li className="text-xs font-extralight mb-1">
                +351 253 378 181{" "}
              </li>
              <li className="text-xs font-extralight mb-1">
                hello@casadoeido.com
              </li>
            </ul>

            <div className="mr-10 lg:mr-20">
              <h1 className="text-xs uppercase mb-1">{t("morada")}</h1>
              <div className="text-xs font-extralight">
                Rua 2, nº 6, Vilar -a- Monte, <br />
                Terras de Bouro, <br />
                Portugal
              </div>
            </div>
            <ul className="mr-10 lg:mr-20 mb-3">
              <li className="text-xs uppercase mb-2">
                <Link href={"/faq"}>FAQ</Link>
              </li>
              <li className="text-xs uppercase mb-2">
                <Link href={"/privacy"}>{t("protecao")}</Link>
              </li>
              <li className="text-xs uppercase mb-2">
                <Link href={"/terms"}>{t("termos")}</Link>
              </li>
              <li className="text-xs uppercase mb-2">
                <a href={"https://www.ciab.pt/pt/"}>Resolução de Conflitos</a>
              </li>
              <li className="text-xs uppercase mb-2">
                <a
                  href={
                    "https://rnt.turismodeportugal.pt/RNT/RNET.aspx?nr=4736 "
                  }
                >
                  RNET 4736
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
