# EladProject
A basic NestJS server connected to SQL Server.
Business logic is implemented via Stored Procedures for clean and maintainable code.

## GitHub Repository
https://github.com/shlomivig/Elad


## Setup and Run
- The database is pre-configured with tables and sample data.
- Postman JSON file with all required requests is included.

### Steps
1.	Clone the repository.
2.	Install dependencies: npm install
3.	Start the server: npm run start
4.	Import the provided JSON file into Postman.
5.	Run the requests to test the API.
הערות:
1.	token יהיה שמיש למשך 10 דקות. 
כרגע (בגלל הזמנים) דאגתי לזה דרך setTimeOut  כשעושים לוגין. (עובד טוב אבל פחות מומלץ בפרודקשן), למעשה הייתי מיישם את זה דרך job בSQL שדואג לוודא שהטוקן קיים רק 10 דקות או דרך JWT ברמת השרת ליצירת טוקן.
2.	בנוסף הnest  די מינימליסטי, הכל מיושם דרך הSP בSQL. הכל עובד לפי הדרישה, אבל כרגע בחרתי ככה בגלל הזמנים, בגדול הייתי מאפיין וכותב את זה אחרת ביום-יום. (יותר קוד בשרת ופחות בDB, בשביל בדיקות וכו.)
מה שאומר שכל הקריאות הם POST, הURL קבוע והוא שולח תמיד action  ולפעמים גם params.
3.	כל הקריאות נמצאות בקובץ Elad.postman_collection.json. צריך רק לייבא את הקובץ לפוסטמן ולהריץ את השרת לוקאלית.
4.	הDB יושב על מחשב מרוחק ויש כרגע 5 יוזרים במערכת, לכולם אותה סיסמה: password123
michael.wilson@example.com
emily.davis@example.com
david.johnson@example.com
jane.smith@example.com
john.doe@example.com

לכל שאלה אשמח לענות בטלפון 0546580790
