import { 
    IonBackButton,
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React, { useState } from 'react';
import { IonFabButton } from '@ionic/react';
import { Plugins, CameraResultType } from '@capacitor/core';
import { async } from 'q';

const NewItem: React.FC = () => {
    const { Camera } = Plugins;
    const [photo, setPhoto] = useState();
    const takePhoto = async () => {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri
        })
        setPhoto(image.webPath)
    };
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home"/>
                    </IonButtons>
                    <IonTitle>New Item</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <img src={photo} />
                <IonButton onClick={takePhoto}>Take Photo</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default NewItem;