"use client"

import posthog from 'posthog-js';
import { nextJsOnClient } from '../sharedCode/nextJSUtils';


var inited = false;

function ensureInit(){
    if (inited){
        return;
    }
    if (!nextJsOnClient()){
        return;
    }
    posthog.init('phc_95zmjuHYwj4k4nrJdIJTfzwwtig5nPQ3XoIoZgWq9sj', { api_host: 'https://app.posthog.com' })
    inited = true;
}

export function urlWithRef(doc:Document): string {
    var url = doc.URL;
    if (!url.includes("ref")) {
        const ref = doc.referrer;
        url += "&ref=" + ref;
    }
    return url;
}

export async function submitEmail(
    email: string,
    data: string,
    domain: string
): Promise<void> {
    if (skipSendingData()) {
        console.log("skipped sending email: " + email);
        return;
    }
    const bodyData = {
        email: email,
        data: data,
        domain: domain,
    };
    const endpoint = "/api/submitEmail";
    ensureInit();
    posthog.capture('submitEmail', { data: data, domain:domain, email: email});
    await sendJson(endpoint, JSON.stringify(bodyData));
}

export async function submitAnalytics(
    event: string,
    data: string,
    domain: string
): Promise<void> {
    if (skipSendingData()) {
        console.log("skipped sending analytics: " + event);
        return;
    }
    domain = "egames";
    const bodyData = {
        event: event,
        data: data,
        domain: domain,
    };
    const endpoint = "/api/submitAnalytics";
    ensureInit();
    posthog.capture(event, { data: data, domain:domain});
    await sendJson(endpoint, JSON.stringify(bodyData));
}

async function sendJson(endpoint: string, jsonString: string): Promise<void> {
    console.log("send: " + endpoint);
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: jsonString,
    };
    fetch(endpoint, options);
}

var firstLocalWarning = false;

function skipSendingData() {
    if (!nextJsOnClient()){
        return true;
    }
    const local = window.location.href.includes("localhost");
    if (local) {
        if (!firstLocalWarning) {
            firstLocalWarning = true;
        }
    }
    return local;
}
