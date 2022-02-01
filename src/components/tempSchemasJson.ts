const tempSchemasJson = [{
    "schemaId": "section",
    "schemaType": "section",
    "title": "Section",
    "image": "/assets/images/sections.png",
    "questions": [
        {
            "prpId": 1,
            "title": "Title",
            "parts": [
                {
                    "part": 1,
                    "viewType": "text",
                    "cssClass": "css_13050_1"
                }
            ]
        },
        {
            "prpId": 2,
            "title": "Description",
            "parts": [
                {
                    "part": 1,
                    "viewType": "textarea",
                    "cssClass": "css_13050_1"
                }
            ]
        }
    ]
},
{
    "schemaId": "question",
    "schemaType": "question",
    "title": "Question",
    "image": "/assets/images/question.png",
    "questions": [
        {
            "prpId": 1,
            "title": "Title",
            "parts": [
                {
                    "part": 1,
                    "viewType": "text",
                    "validations": {
                        "required": true,
                        "minLength": 3,
                        "maxLength": 50
                    }
                }
            ]
        },
        {
            "prpId": 2,
            "title": "Parts",
            "parts": [
                {
                    "part": 1,
                    "viewType": "select",
                    "fixValues": [
                        {
                            "id": 1,
                            "value": "1"
                        },
                        {
                            "id": 2,
                            "value": "2"
                        },
                        {
                            "id": 3,
                            "value": "3"
                        }
                    ]
                }
            ]
        },
        {
            "prpId": 3,
            "title": "Is Multi",
            "parts": [
                {
                    "part": 1,
                    "viewType": "select",
                    "fixValues": [
                        {
                            "id": 1,
                            "value": "No"
                        },
                        {
                            "id": 2,
                            "value": "Yes"
                        }
                    ]
                }
            ]
        },
        {
            "prpId": 4,
            "title": "Css Class",
            "parts": [
                {
                    "part": 1,
                    "viewType": "text"
                }
            ]
        },
        {
            "prpId": 5,
            "title": "Help",
            "parts": [
                {
                    "part": 1,
                    "viewType": "text"
                }
            ]
        }
    ]
},
{
    "schemaId": "text",
    "schemaType": "part",
    "title": "Short Text",
    "image": "/assets/images/input.png",
    "questions": [
        {
            "prpId": 1,
            "title": "Caption",
            "parts": [
                {
                    "part": 1,
                    "viewType": "text"
                }
            ]
        },
        {
            "prpId": 2,
            "title": "Css Class",
            "parts": [
                {
                    "part": 1,
                    "viewType": "text"
                }
            ]
        },
        {
            "prpId": 3001,
            "title": "required",
            "sectionId": 1,
            "parts": [
                {
                    "part": 1,
                    "viewType": "select",
                    "fixValues": [
                        {
                            "id": 0,
                            "value": "No"
                        },
                        {
                            "id": 1,
                            "value": "Yes"
                        }
                    ]
                }
            ]
        },
        {
            "prpId": 3002,
            "title": "minLength",
            "sectionId": 1,
            "parts": [
                {
                    "part": 1,
                    "viewType": "text",
                    "validations": {
                        "dataType": "int"
                    }
                }
            ]
        },
        {
            "prpId": 3003,
            "title": "maxLength",
            "sectionId": 1,
            "parts": [
                {
                    "part": 1,
                    "viewType": "text",
                    "validations": {
                        "dataType": "int"
                    }
                }
            ]
        },
        {
            "prpId": 3004,
            "title": "min",
            "sectionId": 1,
            "parts": [
                {
                    "part": 1,
                    "viewType": "text",
                    "validations": {
                        "dataType": "int"
                    }
                }
            ]
        },
        {
            "prpId": 3005,
            "title": "max",
            "sectionId": 1,
            "parts": [
                {
                    "part": 1,
                    "viewType": "text",
                    "validations": {
                        "dataType": "int"
                    }
                }
            ]
        },
        {
            "prpId": 3006,
            "title": "dataType",
            "sectionId": 1,
            "parts": [
                {
                    "part": 1,
                    "viewType": "select",
                    "fixValues": [
                        {
                            "id": 0,
                            "value": "text"
                        },
                        {
                            "id": "int",
                            "value": "int"
                        },
                        {
                            "id": "float",
                            "value": "float"
                        }
                    ]
                }
            ]
        },
        {
            "prpId": 3007,
            "title": "regex",
            "sectionId": 1,
            "parts": [
                {
                    "part": 1,
                    "viewType": "text"
                }
            ]
        }
    ],
    "sections": [
        {
            "id": 1,
            "title": "Validations"
        }
    ]
},
{
    "schemaId": "textarea",
    "schemaType": "part",
    "title": "Long Text",
    "image": "/assets/images/text-box.png",
    "questions": [
        {
            "prpId": 1,
            "title": "Caption",
            "parts": [
                {
                    "part": 1,
                    "viewType": "text"
                }
            ]
        },
        {
            "prpId": 2,
            "title": "Css Class",
            "parts": [
                {
                    "part": 1,
                    "viewType": "text"
                }
            ]
        },
        {
            "prpId": 3001,
            "title": "required",
            "sectionId": 1,
            "parts": [
                {
                    "part": 1,
                    "viewType": "select",
                    "fixValues": [
                        {
                            "id": 0,
                            "value": "No"
                        },
                        {
                            "id": 1,
                            "value": "Yes"
                        }
                    ]
                }
            ]
        },
        {
            "prpId": 3002,
            "title": "minLength",
            "sectionId": 1,
            "parts": [
                {
                    "part": 1,
                    "viewType": "text",
                    "validations": {
                        "dataType": "int"
                    }
                }
            ]
        },
        {
            "prpId": 3003,
            "title": "maxLength",
            "sectionId": 1,
            "parts": [
                {
                    "part": 1,
                    "viewType": "text",
                    "validations": {
                        "dataType": "int"
                    }
                }
            ]
        },
        {
            "prpId": 3007,
            "title": "regex",
            "sectionId": 1,
            "parts": [
                {
                    "part": 1,
                    "viewType": "text"
                }
            ]
        }
    ],
    "sections": [
        {
            "id": 1,
            "title": "Validations"
        }
    ]
},
{
    "schemaId": "AutoComplete",
    "schemaType": "part",
    "title": "Autocomplete",
    "image": "/assets/images/autoComplete.png",
    "questions": [
        {
            "prpId": 1,
            "title": "Caption",
            "parts": [
                {
                    "part": 1,
                    "viewType": "text"
                }
            ]
        },
        {
            "prpId": 2,
            "title": "Css Class",
            "parts": [
                {
                    "part": 1,
                    "viewType": "text"
                }
            ]
        },
        {
            "prpId": 5,
            "title": "Url",
            "parts": [
                {
                    "part": 1,
                    "viewType": "text",
                    "validations": {
                        "required": true,
                        "regex1": "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)"
                    }
                }
            ]
        },
        {
            "prpId": 3001,
            "title": "required",
            "sectionId": 1,
            "parts": [
                {
                    "part": 1,
                    "viewType": "select",
                    "fixValues": [
                        {
                            "id": 0,
                            "value": "No"
                        },
                        {
                            "id": 1,
                            "value": "Yes"
                        }
                    ]
                }
            ]
        }
    ],
    "sections": [
        {
            "id": 1,
            "title": "Validations"
        }
    ]
},
{
    "schemaId": "Select",
    "schemaType": "part",
    "title": "Select",
    "image": "/assets/images/dropdown.png",
    "questions": [
        {
            "prpId": 1,
            "title": "Caption",
            "parts": [
                {
                    "part": 1,
                    "viewType": "text"
                }
            ]
        },
        {
            "prpId": 2,
            "title": "Css Class",
            "parts": [
                {
                    "part": 1,
                    "viewType": "text"
                }
            ]
        },
        {
            "prpId": 4,
            "title": "Items",
            "multi": "true",
            "parts": [
                {
                    "part": 1,
                    "viewType": "Text",
                    "caption": "Value",
                    "validations": {
                        "dataType": "int"
                    }
                },
                {
                    "part": 2,
                    "viewType": "text",
                    "caption": "Title"
                }
            ]
        },
        {
            "prpId": 5,
            "title": "Url",
            "parts": [
                {
                    "part": 1,
                    "viewType": "text",
                    "validations": {
                        "regex1": "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)"
                    }
                }
            ]
        },
        {
            "prpId": 3001,
            "title": "required",
            "sectionId": 1,
            "parts": [
                {
                    "part": 1,
                    "viewType": "select",
                    "fixValues": [
                        {
                            "id": 0,
                            "value": "No"
                        },
                        {
                            "id": 1,
                            "value": "Yes"
                        }
                    ]
                }
            ]
        }
    ],
    "sections": [
        {
            "id": 1,
            "title": "Validations"
        }
    ]
},
{
    "schemaId": "Checklist",
    "schemaType": "part",
    "title": "Checklist",
    "image": "/assets/images/checklist.png",
    "questions": [
        {
            "prpId": 1,
            "title": "Caption",
            "parts": [
                {
                    "part": 1,
                    "viewType": "text"
                }
            ]
        },
        {
            "prpId": 2,
            "title": "Css Class",
            "parts": [
                {
                    "part": 1,
                    "viewType": "text"
                }
            ]
        },
        {
            "prpId": 4,
            "title": "Items",
            "multi": "true",
            "parts": [
                {
                    "part": 1,
                    "viewType": "Text",
                    "caption": "Value",
                    "validations": {
                        "dataType": "int"
                    }
                },
                {
                    "part": 2,
                    "viewType": "text",
                    "caption": "Title"
                }
            ]
        },
        {
            "prpId": 5,
            "title": "Url",
            "parts": [
                {
                    "part": 1,
                    "viewType": "text"
                }
            ]
        },
        {
            "prpId": 3001,
            "title": "required",
            "sectionId": 1,
            "parts": [
                {
                    "part": 1,
                    "viewType": "select",
                    "fixValues": [
                        {
                            "id": 0,
                            "value": "No"
                        },
                        {
                            "id": 1,
                            "value": "Yes"
                        }
                    ]
                }
            ]
        },
        {
            "prpId": 3002,
            "title": "minLength",
            "sectionId": 1,
            "parts": [
                {
                    "part": 1,
                    "viewType": "text",
                    "validations": {
                        "dataType": "int"
                    }
                }
            ]
        },
        {
            "prpId": 3003,
            "title": "maxLength",
            "sectionId": 1,
            "parts": [
                {
                    "part": 1,
                    "viewType": "text",
                    "validations": {
                        "dataType": "int"
                    }
                }
            ]
        }
    ],
    "sections": [
        {
            "id": 1,
            "title": "Validations"
        }
    ]
}];

export default tempSchemasJson;
