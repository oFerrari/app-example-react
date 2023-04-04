import { BaseLayout } from "../../layout/BaseLayout";
import { Gallery } from "../../components/Gallery";

export function GalleryPage(){
    return(
        <BaseLayout appBarTitle="Galeria">
            <Gallery/>
        </BaseLayout>
    )
}