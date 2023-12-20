import AppLayout from "../AppLayout";
import { trans } from "../../utils/translation";

const HomePage = ({ lang, setLang }) => {
    return (
        <AppLayout setLang={setLang} title="Clean Blog" shortDec="A Blog Theme by Start Bootstrap">
            { trans('page.home.title', lang) }
        </AppLayout>
    );
};

export default HomePage;