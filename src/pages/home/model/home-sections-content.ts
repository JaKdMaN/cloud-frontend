import { IContentCard } from 'src/stores/types/card'

export const homeSectionsContent: IContentCard[] = [
  {
    title: 'Встроенная защита от вредоносного ПО, спама и программ-вымогателей',
    description: `При предоставлении доступа к файлам Облако применяет шифрование,
                  обеспечивая высокий уровень безопасности. Сервис проверяет передаваемые
                  вам файлы и удаляет те из них, в которых обнаружены вредоносное ПО, спам,
                  программы-вымогатели или фишинг. Приложение является облачным сервисом,
                  а значит оно позволяет не хранить файлы локально и снижает риски для ваших устройств.`,
    img: 'src/assets/images/home/home-section-1.png',
    reverse: true,
  },
  {
    title: 'Приложения для эффективной совместной работы',
    description: `Открыв доступ к файлам или папкам по ссылке, вы можете разрешить другим
                  пользователям просматривать, редактировать или скачивать их напрямую из вашего хранилища данных,
                  как из файлообменника. Такие объекты будут отмечены специальным значком
                  и собраны в разделе «Общий доступ». Кроме того,
                  вы можете создать в Облаке папку и пригласить пользователей – они смогут не только видеть
                  уже добавленные данные, но и загрузить свои файлы.`,
    img: 'src/assets/images/home/home-section-2.png',
  },
  {
    title: 'Организуйте хранение файлов, как вам удобно',
    description: `Облако предоставляет возможность полностью персонализировать хранение файлов,
                  создавая папки и объединяя их в группы. Чтобы было легко найти файл, который
                  вы недавно загрузили или отредактировали, не нужно просматривать все папки.
                  Свежие документы и фотографии автоматически добавляются в ленту последних файлов.
                  Кроме того, для быстрого поиска важных документов или фотографий,
                  их можно добавить в избранное. Они будут помечены звездочкой и собраны в специальном разделе.`,
    img: 'src/assets/images/home/home-section-3.png',
    reverse: true,
  },
]
