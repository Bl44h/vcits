import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import axios from "axios";
import {
    AnnouncementContainer,
    Content,
    Title,
    AnnouncementForm,
    FormGroup,
    Label,
    TextArea,
    Button,
    AnnouncementList,
    AnnouncementItem,
    AnnouncementContent,
    AnnouncementHeader
}from '../../styles/AnnouncementStyles'

const CheckAnnouncementSection = () => {
    return (
        <AnnouncementContainer>
            <Sidebar/>
            <Content>
                <Title>Announcement</Title>
                <AnnouncementForm>
                    <FormGroup>
                        <Label htmlFor="announcement">Announcement</Label>
                        <TextArea
                            id="announcement"
                            required
                            rows={4}
                            cols={50}
                        />
                    </FormGroup>
                    <Button type="submit">Send announcement</Button>
                </AnnouncementForm>

                <h2>Announcements</h2>
                <AnnouncementList></AnnouncementList>
            </Content>
        </AnnouncementContainer>
    )
};


export default CheckAnnouncementSection