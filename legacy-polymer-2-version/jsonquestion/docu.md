<!-- TITLE: Mijn-App form documentation -->

<!-- SUBTITLE: Extended documentation about the specification of JSON to build forms for mijn-app-->

# Question document

This document contains information about the question specification of mijn-app.

# The form

The form to specify a questionaire consists of three main properties.

1. `title` the title of the form
1. `overview` an object containing information of the overview page of the form. More infor can be found [here](#overview-screen).
1. `questions` specifications of the screens of which the questionaire consists.

The form also has an optional `cost` property to indicate if a customer needs to pay after completing the form.

```JSON
{
    "title": ...,
    "overview": {
        ...
    },
    "cost": true,
    "questions":{
        ...
    },
}
```

# Overview screen

The overview screen contains the information for the first page of the questionaire which is shown to a user. It consists of four main elements: `sub_title`, `send_to`, `needed_documents` and `steps`. The overview screen has one optional property called `steps`. An example is shown below.

Required

1. `sub_title` sub title of the overview screen.
1. `send_to` a list of municipalities which the requested_values will be shared with.
1. `needed_documents` the document a user needs to fill in the form
1. `steps` list of steps the user is going to do during the form

Optional

1. `cost_description` an optional description about costs.

```JSON
{
    "sub_title": "Wat leuk dat je gaat trouwen! Om te trouwen hebben wij een aantal gegevens van je nodig.",
    "send_to": [
        {
            "name": "Gem. Eindhoven",
            "access_level": "Lezen en schrijven",
        },
    ],
    "needed_documents": [
        "Legitimatiebewijs van je partner",
    ],
    "steps": [
        "Je geeft aan met wie je gaat trouwen.",
        "Je kiest een datum en locatie.",
        "Je geeft aan wie je getuigen voor het huwelijk zijn.",
        "Je betaalt met IDEAL of Creditcard.",
    ],
    "cost_description": "Trouwen op dinsdagochtend is gratis. De kosten kunnen varieren, afhankelijk van je wensen.",
}
```

# Question types

This chapter is devoted to the different question types and their specifications.

## General

To end a form, leave the `next` property empty in the question. This way the form will automatically detect the end and set the final overview screen, where a user can check the filled in values.

## Text

A question screen containing a question title, a subitle and a text-input.

### Required parameters

1. `id` the unique identifier of the question
1. `type` the type needs to be set to "text"
1. `title` the question
1. `subtitle` additional information about the question or the answer which need to be specified
1. `next` the id of the question which should be displayed after this question.
1. `data_properties` an object containing an id and a title for the value which is going to be stored from the question.
    * `title` the title which will be shown in the `final-check` screen.
    * `bind` the identifier to save the value on.
    * `placeholder` optional parameter which can be set when you don't want to show the real value in the final check screen.

### Optional parameters

1. `optional` a way to specify that a certain question is optional. inside the optional object a `goto` object needs to be stated which directs to the id of the next question.
1. `metadata` a way to add additional options to the text field.
    * `autocomplete` an autocomplete variable which can be set to `address`.

Example text question specification:

```JSON
{
    "id": "bbe90362-2e82-11e8-b467-0ed5f89f718b",
    "type": "text",
    "title": "Wat wordt je nieuwe adres?",
    "subtitle": "bijv. 1234AB Eindhoven",
    "data_properties": {
        "title": "Nieuwe adres",
        "bind": "address",
    },
    "metadata": {
        "autocomplete": "address",
    },
    "next": "bbe906f0-2e82-11e8-b467-0ed5f89f718b",
},
```

## Multi Text

A question screen containing multiple text fields.

### Required parameters

1. `id` the unique identifier of the question
1. `type` the type needs to be set to "text"
1. `title` the question
1. `subtitle` additional information about the question or the answer which need to be specified
1. `next` the id of the question which should be displayed after this question.
1. `data_properties` an object containing an id and a title for the value which is going to be stored from the question.
    * `title` the title which will be shown in the `final-check` screen.
    * `bind` the identifier to save the value on.
    * `placeholder` optional parameter which can be set when you don't want to show the real value in the final check screen.
1. `list` a list of text field specifications
    * `text` the title of the text field
    * `value` the value which the text field holds
    * `name` the unique identifier of the field

### Optional parameters

1. `optional` a way to specify that a certain question is optional. inside the optional object a `goto` object needs to be stated which directs to the id of the next question.

Example multi text question specification:

```JSON
{
    "id": "8f6c188e-2e86-11e8-b467-0ed5f89f718b",
    "type": "multi_text",
    "title": "Gegevens huwelijkspartner",
    "subtitle": "Kloppen deze gegevens?",
    "data_properties": {
        "title": "Gegevens huwelijkspartner",
        "bind": "marriage_partner_data",
    },
    "list": [{
        "text": "Naam",
        "name": "name",
        "value": "Evelien",
    }, {
        "text": "BSN",
        "value": "13379002",
        "name": "bsn",
    }],
    "next": "8f6c1ca8-2e86-11e8-b467-0ed5f89f718b",
},
```

## Calendar

A question screen containing a calendar.

### Required parameters

1. `id` the unique identifier of the question
1. `type` the type needs to be set to "text"
1. `title` the question
1. `subtitle` additional information about the question or the answer which need to be specified
1. `next` the id of the question which should be displayed after this question.
1. `data_properties` an object containing an id and a title for the value which is going to be stored from the question.
    * `title` the title which will be shown in the `final-check` screen.
    * `bind` the identifier to save the value on.
    * `placeholder` optional parameter which can be set when you don't want to show the real value in the final check screen.
1. `list` a list of text field specifications
    * `text` the title of the text field
    * `value` the value which the text field holds
    * `name` the unique identifier of the field

### Optional parameters

1. `optional` a way to specify that a certain question is optional. inside the optional object a `goto` object needs to be stated which directs to the id of the next question.
1. `metadata` a way to add additional options to the calendar. 
    * `min_date` The minimum selectable date of the calendar. Should be specified as javascript date.
    * `max_date` The maximum selectable date of the calendar. Should be specified as javascript date.
    * `unavailabilties` A list of additional data retrieved from API about unavailable dates based on the user input during the form.

Example calendar question specification:

```JSON
{
    "id": "bbe906f0-2e82-11e8-b467-0ed5f89f718b",
    "type": "calendar",
    "title": "Wanneer wil je verhuizen?",
    "subtitle": "bijv. 12-12-2017",
    "data_properties": {
        "title": "Datum van verhuizing",
        "bind": "move_date",
    },
    "metadata": {

        "min_date": new Date(),
        "max_date": new Date(new Date().setMonth(new Date().getMonth() + 3)),
    },
    "next": "bbe90d9e-2e82-11e8-b467-0ed5f89f718b",
},
```

## Checkbox group

A question screen containing checkboxes.

### Required parameters

1. `id` the unique identifier of the question
1. `type` the type needs to be set to "text"
1. `title` the question
1. `subtitle` additional information about the question or the answer which need to be specified
1. `next` the id of the question which should be displayed after this question.
1. `data_properties` an object containing an id and a title for the value which is going to be stored from the question.
    * `title` the title which will be shown in the `final-check` screen.
    * `bind` the identifier to save the value on.
    * `placeholder` optional parameter which can be set when you don't want to show the real value in the final check screen.
1. `options` the specifications for the different checkboxes.
    * `text` The text displayed on the screen for an option (required)
    * `cost` Cost specification if a selection has cost (optional)
    * `value` The value to store when an option is selected (required)

### Optional parameters

1. `optional` a way to specify that a certain question is optional. inside the optional object a `goto` object needs to be stated which directs to the id of the next question.

Example checkbox_group question specification:

```JSON
{
    "id": "bbe90d9e-2e82-11e8-b467-0ed5f89f718b",
    "type": "checkbox_group",
    "title": "Met wie ga je verhuizen?",
    "subtitle": "Er wordt een bericht gestuurd naar de persoon die meeverhuist",
    "data_properties": {
        "title": "Personen die meeverhuizen",
        "bind": "movers",
    },
    "options": [
        {
            "text": "Evelien de Vries",
            "value": "Evelien de Vries",
        },
        {
            "text": "Thomas de Vries",
            "value": "Thomas de Vries",
        },
    ],
    "next": "bbe91064-2e82-11e8-b467-0ed5f89f718b",
},
```

## Radiobutton group

A question screen containing radiobuttons.

### Required parameters

1. `id` the unique identifier of the question
1. `type` the type needs to be set to "text"
1. `title` the question
1. `subtitle` additional information about the question or the answer which need to be specified
1. `next` the id of the question which should be displayed after this question.
1. `data_properties` an object containing an id and a title for the value which is going to be stored from the question.
    * `title` the title which will be shown in the `final-check` screen.
    * `bind` the identifier to save the value on.
    * `placeholder` optional parameter which can be set when you don't want to show the real value in the final check screen.
1. `options` the specifications for the different radiobuttons.
    * `text` The text displayed on the screen for an option (required)
    * `cost` Cost specification if a selection has cost (optional)
    * `value` The value to store when an option is selected (required)

### Optional parameters

1. `optional` a way to specify that a certain question is optional. inside the optional object a `goto` object needs to be stated which directs to the id of the next question.

Example radiobutton_group question specification:

```JSON
{
    "id": "8f6c31ac-2e86-11e8-b467-0ed5f89f718b",
    "type": "radiobutton_group",
    "title": "Ik ben bloedverwant in de derde of vierde graads.",
    "subtitle": "Bijvoorbeeld neef en nicht of tante en neef.",
    "data_properties": {
        "title": "Bloedverwant derde of vierde graads",
        "bind": "blood_relation_family",
    },
    "options": [
        {
            "text": "Ja",
            "value": "Ja",
        },
        {
            "text": "Nee",
            "value": "Nee",
        },
    ],
    "next": "8f6c3378-2e86-11e8-b467-0ed5f89f718b",
},
```

## Choice

A question screen giving the user a choice on how to continue the form.

### Required parameters

1. `id` the unique identifier of the question
1. `type` the type needs to be set to "text"
1. `title` the question
1. `subtitle` additional information about the question or the answer which need to be specified
1. `next` the id of the question which should be displayed after this question.
1. `options` the specifications for the different choices.
    * `text` The text displayed on the screen for an option (required)
    * `cost` Cost specification if a selection has cost (optional)
    * `icon` An icon url which is displayed before the text(optional)
    * `goto` The id of the question the form needs to goto when the option is selected (required)

### Optional parameters

1. `optional` a way to specify that a certain question is optional. inside the optional object a `goto` object needs to be stated which directs to the id of the next question.

Example choice question specification:

```JSON
{
    "id": "bbe91064-2e82-11e8-b467-0ed5f89f718b",
    "type": "choice",
    "title": "Fotografeer je huurcontract",
    "subtitle": "Wij hebben jouw huurcontract nodig om je verhuizing te bevestigen",
    "options": [
        {
            "text": "Maak foto",
            "icon": "camera.svg",
            "goto": "bbe912b2-2e82-11e8-b467-0ed5f89f718b",
        },
        {
            "text": "Upload",
            "icon": "upload.svg",
            "goto": "bbe914c4-2e82-11e8-b467-0ed5f89f718b",
        },
    ],
},
```

## Multiple choice

A question screen giving the user a choice from a number of options.

### Required parameters

1. `id` the unique identifier of the question
1. `type` the type needs to be set to "text"
1. `title` the question
1. `subtitle` additional information about the question or the answer which need to be specified
1. `next` the id of the question which should be displayed after this question.
1. `data_properties` an object containing an id and a title for the value which is going to be stored from the question.
    * `title` the title which will be shown in the `final-check` screen.
    * `bind` the identifier to save the value on.
    * `placeholder` optional parameter which can be set when you don't want to show the real value in the final check screen.
1. `options` the specifications for the different choices.
    * `text` The text displayed on the screen for an option (required)
    * `cost` Cost specification if a selection has cost (optional)
    * `value` The value to store when an option is selected (required)
    * `video_url` An optional youtube url to add a video to an option(optional)

### Optional parameters

1. `optional` a way to specify that a certain question is optional. inside the optional object a `goto` object needs to be stated which directs to the id of the next question.

Example multiple_choice question specification:

```JSON
{
    "id": "8f6c2220-2e86-11e8-b467-0ed5f89f718b",
    "type": "multiple_choice",
    "title": "Kies een trouwamtenaar",
    "subtitle": "Je kunt kiezen wie jullie trouwt. Scroll door de lijst om iedereen te zien.",
    "data_properties": {
        "title": "Trouwambtenaar",
        "bind": "wedding_official",
    },
    "options": [
        {
            "text": "Geen voorkeur",
            "value": "Geen voorkeur",
        },
        {
            "text": "Kies Willem",
            "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "value": "Willem",
        },
        {
            "text": "Kies Judith",
            "video_url": "https://www.youtube.com/watch?v=hVtAw2gie5Y",
            "value": "Judith",
        },
    ],
    "next": "8f6c243c-2e86-11e8-b467-0ed5f89f718b",
},
```

## Declaration

A question screen where the user must agree with the specified statement

### Required parameters

1. `id` the unique identifier of the question
1. `type` the type needs to be set to "text"
1. `title` the question
1. `next` the id of the question which should be displayed after this question.
1. `data_properties` an object containing an id and a title for the value which is going to be stored from the question.
    * `title` the title which will be shown in the `final-check` screen.
    * `bind` the identifier to save the value on.
    * `placeholder` optional parameter which can be set when you don't want to show the real value in the final check screen.

Example declaration question specification:

```JSON
{
    "id": "8f6c2fcc-2e86-11e8-b467-0ed5f89f718b",
    "type": "declaration",
    "title": "Ik verklaar dat ik nog met niemand anders getrouwd ben.",
    "data_properties": {
        "title": "Nog niet getrouwd",
        "bind": "not_married_declaration",
    },
    "declaration_text": "Ja",
    "next": "8f6c31ac-2e86-11e8-b467-0ed5f89f718b",
},
```

## Location

A question screen where the user can choose a location.

### Required parameters

1. `id` the unique identifier of the question
1. `type` the type needs to be set to "text"
1. `title` the question
1. `subtitle` additional information about the question or the answer which need to be specified
1. `next` the id of the question which should be displayed after this question.
1. `data_properties` an object containing an id and a title for the value which is going to be stored from the question.
    * `title` the title which will be shown in the `final-check` screen.
    * `bind` the identifier to save the value on.
    * `placeholder` optional parameter which can be set when you don't want to show the real value in the final check screen.

### Optional parameters

1. `optional` a way to specify that a certain question is optional. inside the optional object a `goto` object needs to be stated which directs to the id of the next question.

Example location question specification:

```JSON
{
    "id": "8f6c1f5a-2e86-11e8-b467-0ed5f89f718b",
    "type": "location",
    "title": "Waar wil je trouwen?",
    "subtitle": "Op deze locatie kunnen jullie een handtekening zetten.",
    "data_properties": {
        "title": "Trouw locatie",
        "bind": "location",
    },
    "next": "8f6c2220-2e86-11e8-b467-0ed5f89f718b",
},
```

## Documents photo

A question screen where the user can add one or more photos.

### Required parameters

1. `id` the unique identifier of the question
1. `type` the type needs to be set to "text"
1. `title` the question
1. `subtitle` additional information about the question or the answer which need to be specified
1. `next` the id of the question which should be displayed after this question.
1. `data_properties` an object containing an id and a title for the value which is going to be stored from the question.
    * `title` the title which will be shown in the `final-check` screen.
    * `bind` the identifier to save the value on.
    * `placeholder` optional parameter which can be set when you don't want to show the real value in the final check screen.

### Optional parameters

1. `optional` a way to specify that a certain question is optional. inside the optional object a `goto` object needs to be stated which directs to the id of the next question.
1. `another` a way to specify a loop such that a user can add more than one photo.
    * `text` the text shown on the button (required)
    * `icon` the icon shown on the button (optional)

Example documents photo specification:

```JSON
{
    "id": "bbe912b2-2e82-11e8-b467-0ed5f89f718b",
    "type": "documents_photo",
    "title": "Fotografeer je huurcontract",
    "subtitle": "Wij hebben jouw huurcontract nodig om je verhuizing te bevestigen",
    "data_properties": {
        "title": "Documenten",
        "bind": "rental_contract_photos",
        "placeholder": "Huurcontract",
    },
    "another":
        {
            "text": "Nog een foto maken",
            "icon": "camera.svg",
        },
},
```

## Documents upload

A question screen where the user can upload one or more documents.

### Required parameters

1. `id` the unique identifier of the question
1. `type` the type needs to be set to "text"
1. `title` the question
1. `subtitle` additional information about the question or the answer which need to be specified
1. `next` the id of the question which should be displayed after this question.
1. `data_properties` an object containing an id and a title for the value which is going to be stored from the question.
    * `title` the title which will be shown in the `final-check` screen.
    * `bind` the identifier to save the value on.
    * `placeholder` optional parameter which can be set when you don't want to show the real value in the final check screen.

### Optional parameters

1. `optional` a way to specify that a certain question is optional. inside the optional object a `goto` object needs to be stated which directs to the id of the next question.
1. `another` a way to specify a loop such that a user can add more than one photo.
    * `text` the text shown on the button (required)
    * `icon` the icon shown on the button (optional)

Example documents upload specification:

```JSON
{
    "id": "bbe914c4-2e82-11e8-b467-0ed5f89f718b",
    "type": "documents_upload",
    "title": "Upload je huurcontract",
    "subtitle": "Wij hebben jouw huurcontract nodig om je verhuizing te bevestigen",
    "data_properties": {
        "title": "Documenten",
        "bind": "rental_contract_photos",
        "placeholder": "Huurcontract",
    },
    "another":
        {
            "text": "Nog een foto uploaden",
            "icon": "upload.svg",
        },
},
```
