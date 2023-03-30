import { BaseLayout } from "../../layout/BaseLayout";
import { Gallery } from "../Gallery";

export function GalleryPage(){
    return(
        <BaseLayout appBarTitle="Galeria">
            <Gallery/>
        </BaseLayout>
    )
}