# EladProject
A basic NestJS server connected to SQL Server.
Business logic is implemented via Stored Procedures for clean and maintainable code.

## GitHub Repository
https://github.com/shlomivig/EladProject.git

## Setup and Run
- The database is pre-configured with tables and sample data.
- Postman JSON file with all required requests is included.

### Steps
1.	Clone the repository.
2.	Install dependencies: npm install
3.	Run: npm run start

Use the provided Postman collection to test the API.


הערות:
1.	token יהיה שמיש למשך 10 דקות. 
כרגע (בגלל הזמנים) דאגתי לזה דרך setTimeOut  כשעושים לוגין. (עובד טוב אבל פחות מומלץ בפרודקשן), למעשה הייתי מיישם את זה דרך job בSQL שדואג לוודא שהטוקן קיים רק 10 דקות או דרך JWT ברמת השרת ליצירת טוקן.
2.	בנוסף הnest  די מינימליסטי, הכל מיושם דרך הSP בSQL. הכל עובד לפי הדרישה, אבל כרגע בחרתי ככה בגלל הזמנים, בגדול הייתי מאפיין וכותב את זה אחרת ביום-יום. (יותר קוד בשרת ופחות בDB, בשביל בדיקות וכו.)
3.	כל הקריאות נמצאות בקובץ Elad.postman_collection.json. צריך רק לייבא את הקובץ לפוסטמן ולהריץ את השרת לוקאלית.
4.	לכל שאלה אשמח לענות בטלפון 0546580790

