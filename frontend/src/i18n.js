import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage = localStorage.getItem('language') || 'en';

const resources = {
    en: {
        translation: {
            navbar: {
                home: 'Home',
                tools: 'Tools',
                projects: 'All Projects',
                process: 'Vibe Coding'
            },

            tools: {
                title: 'Tools',
                description:
                    'Technologies and tools I use for Web Application, API, Database, Automation Workflow, AI, Design, and Software Testing.'
            }
        }
    },

    th: {
        translation: {
            navbar: {
                home: 'หน้าหลัก',
                tools: 'เครื่องมือ',
                projects: 'โปรเจกต์ทั้งหมด',
                process: 'Vibe Coding'
            },

            tools: {
                title: 'เครื่องมือ',
                description:
                    'เทคโนโลยีและเครื่องมือที่ฉันใช้สำหรับ Web Application, API, Database, Automation Workflow, AI, Design และ Software Testing'
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLanguage,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;