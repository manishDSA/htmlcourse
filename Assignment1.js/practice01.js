let arr=

[
    {
        "label_id": 1,
        "label_name": "Category",
        "label": "Category",
        "type": "list",
        "search_enabled": false,
        "values": [
            {
                "label_value_id": 332,
                "display_name": "Sarees",
                "payload": "eyJmaWVsZCI6ImxhYmVscy4xIiwib3AiOiJpbiIsInZhbHVlIjoiMzMyIn0=",
                "image_url": "https://images.meesho.com/images/marketing/70de1d83-b84c-41ba-98e6-dfcf9a818959.png",
                "selected": false
            }
        ]
    },
    {
        "label_id": 9,
        "label_name": "Gender",
        "label": "Gender",
        "type": "pill",
        "search_enabled": false,
        "values": [
            {
                "label_value_id": 443,
                "display_name": "Women",
                "payload": "eyJmaWVsZCI6ImxhYmVscy45Iiwib3AiOiJpbiIsInZhbHVlIjoiNDQzIn0=",
                "image_url": "https://images.meesho.com/images/marketing/1598808287970.png",
                "selected": false
            }
        ]
    },
    {
        "label_id": 4,
        "label_name": "Color",
        "label": "Color",
        "type": "pill",
        "search_enabled": false,
        "values": [
            {
                "label_value_id": 2322,
                "display_name": "Beige",
                "payload": "eyJmaWVsZCI6ImxhYmVscy40Iiwib3AiOiJpbiIsInZhbHVlIjoiMjMyMiJ9",
                "selected": false
            },
            {
                "label_value_id": 29,
                "display_name": "Black",
                "payload": "eyJmaWVsZCI6ImxhYmVscy40Iiwib3AiOiJpbiIsInZhbHVlIjoiMjkifQ==",
                "image_url": "https://images.meesho.com/images/marketing/c39647e6-d742-4e4e-bee8-f53c4fe3cad0.png",
                "selected": false
            },
        ]
    }
]
console.log(arr[2]["values"][1]["image_url"])