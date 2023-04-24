/* Allow search in the URL, it's annoying 
to have to use a seperate search bar or
go to the DuckDuckGo site. */
user_pref("keyword.enabled", true);

/* Disable credit card and address autofill. */
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);

/* Upgrade locally hosted HTTP to HTTPS. */
user_pref("dom.security.https_only_mode.upgrade_local", true);

/* Enable file download verification. Preference of security over privacy. */
user_pref("browser.safebrowsing.downloads.remote.enabled", true);

/* Disabled annoying search bar autofill suggestions. */
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.autoFill", false);



