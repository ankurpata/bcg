import React, { useState, useRef, useEffect } from "react";
import ContentEditable from "react-contenteditable";
import styled from 'styled-components';



const Card = styled.div`
    padding: 10px;
    display:inline-block;
    vertical-align: top;
    position: relative
    background-color:white;
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s; 
    font-size: 14px;
    text-transform: capitalize;
    text-align:left;
    width:150px;
    height:150px;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    } 
`;

const CardStaticStr = styled.p`
    font-size:12px;
    margin: 3px 0 4px 0px;
    padding:0;
    display:block;
`;
const CardTitle = styled.div`
    font-size:14px;
    font-weight:bold;
    padding:0px;
    white-space: nowrap;
    overflow: hidden;
    width:130px;
    text-overflow: ellipsis;
    display:block;
`;
const Label = styled.span`
    color: grey;
    font-weight:bold;
`;
const LinkDelete = styled.span`
    padding: 10px;
    position: absolute;
    right: 0;
    top: 0;
`;
const CardBody = styled.div`
    color: #524f4f;
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; 
`;

const MemoTile = ({ title, body, uid, created_on, saveMemo, deleteMemo }) => {

    const [titleStr, setTitleStr] = useState(title);
    const [bodyStr, setBodyStr] = useState(body);
    const ref = useRef(null);

    const handleDelete = evt => { 
        deleteMemo(uid);
    }

    //Set focus on latest element added using ref.
    useEffect(() => {
        !title && ref.current.focus();
    }, [ref, title, body]);

    const handleUpdate = evt => {
        const {
            currentTarget: {
                dataset: { column },
            }
        } = evt;
     
        saveMemo(uid, column, column==='title'? titleStr : bodyStr);
    }
    const handleChange = evt => {
        //TODO: Validate changes.
        console.log('before', titleStr);
        const {
            currentTarget: {
                dataset: { column },
            },
            target: { value },
        } = evt;
      
        if (column === 'title') {
            setTitleStr(value);
        } else if (column === 'body') {
            setBodyStr(value);
        } 
    };

    return (
        <Card>
            <CardTitle>
                <ContentEditable
                    innerRef={ref}
                    html={titleStr} // innerHTML of the editable div
                    disabled={false} // use true to disable edition
                    data-column="title"
                    onBlur={handleUpdate}
                    onChange={handleChange} // handle innerHTML change
                />
            </CardTitle>
            <LinkDelete href='!#' data-column="body" onClick={handleDelete}><img width="15px" alt="icon" src='https://icon-library.net/images/delete-icon-transparent-background/delete-icon-transparent-background-4.jpg' /></LinkDelete>
            <CardStaticStr><Label>Uid</Label>: {uid}</CardStaticStr>
            <CardStaticStr><Label>Created on </Label>: {created_on}</CardStaticStr>
            <CardBody>
                <ContentEditable
                    html={bodyStr} // innerHTML of the editable div
                    disabled={false} // use true to disable edition
                    data-column="body"
                    onBlur={handleUpdate}
                    onChange={handleChange} // handle innerHTML change
                />
            </CardBody>
        </Card>
    );

}


export default MemoTile;
