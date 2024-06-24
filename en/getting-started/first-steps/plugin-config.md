---
order: 1
---

# Настройка плагина

## Где настроить плагин?
Конфигурация плагина находится в `/oxide/config/RustApp.json`
```c#
{
  // Устаревший параметр, будет удалён в будущих версиях // [!code highlight]
  "Ignore all players manipulation": false, // [!code highlight]
  "[UI] Chat commands": [
    "report", 
    "reports"
  ],
  "[UI] Report reasons": [
    "Чит",
    "Макрос",
    "Багоюз"
  ],
  "[UI] Cooldown between reports (seconds)": 1,
  "[UI] Auto-parse bans from F7 (ingame reports)": true,
  "[Chat] SteamID for message avatar (default account contains RustApp logo)": "76561198134964268",
  "[Chat] Global message format": "<size=12><color=#ffffffB3>Сообщение от Администратора</color></size>\n<color=#AAFF55>%CLIENT_TAG%</color>: %MSG%",
  "[Chat] Direct message format": "<size=12><color=#ffffffB3>ЛС от Администратора</color></size>\n<color=#AAFF55>%CLIENT_TAG%</color>: %MSG%",
  "[Check] Command to send contact": "contact",
  // В случае если кого-то забанят через сайт, в чат будет отправлено оповещение об этом // [!code highlight]
  "[Ban] Enable broadcast server bans": true, // [!code highlight]
  "[Ban] Ban broadcast format": "Игрок <color=#55AAFF>%TARGET%</color> <color=#bdbdbd></color>был заблокирован.\n<size=12>- причина: <color=#d3d3d3>%REASON%</color></size>",
  "[Ban] Kick message format (%REASON% - ban reason)": "Вы забанены на этом сервере, причина: %REASON%",
  "[Ban] Kick message format temporary (%REASON% - ban reason)": "Вы забанены на этом сервере до %TIME%, причина: %REASON%",
  "[Ban] Message format when kicking due to IP": "Вам ограничен вход на сервер!",
  // Если вас пугает выполнение команд через сайт - выключите этот параметр // [!code highlight]
  // тогда это станет абсолютно невозможно // [!code highlight]
  "[Custom Actions] Allow custom actions": true // [!code highlight]
}
```

## Как работает кулдаун на репорты?
Вы можете настроить задержку в секундах, перед тем как игрок сможет отправить следующую жалобу.

`"[UI] Cooldown between reports (seconds)": 60` - установит задержку в 60 секунд

::: warning 
Задержка накладывается на игрока, отправившего жалобу, и не позволяет ему отправлять другие жалобы в течение указанного времени. По истечении этого времени игрок сможет отправить жалобу на любого игрока, даже на того, на кого уже жаловался.
:::