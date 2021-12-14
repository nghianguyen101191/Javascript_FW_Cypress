export const schemaCreatePlan = {
    "type": "object",
    "properties": {
        "code": {
            "type": "integer"
        },
        "msg": {
            "type": "string"
        },
        "data": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },

                "schedule_info": {
                    "type": "null"
                },
                "deal_type_settings": {
                    "type": "null"
                },
                "distribution_settings": {
                    "type": "null"
                },
                "name": {
                    "type": "string"
                },
                "cluster": {
                    "type": "string"
                },
                "stage": {
                    "type": "string"
                },
                "submission_deadline": {
                    "type": "null"
                },
                "from_time": {
                    "type": "null"
                },
                "to_time": {
                    "type": "null"
                },
                "creator": {
                    "type": "string"
                },
                "updater": {
                    "type": "string"
                },
                "created_at": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "string"
                }
            },
            "required": [
                "id",
                "schedule_info",
                "deal_type_settings",
                "distribution_settings",
                "name",
                "cluster",
                "stage",
                "submission_deadline",
                "from_time",
                "to_time",
                "creator",
                "updater",
                "created_at",
                "updated_at"
            ]
        }
    },
    "required": [
        "code",
        "msg",
        "data"
    ]
};
