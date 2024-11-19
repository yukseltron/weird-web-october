const wc2002Flags = [
    {
        country: 'Argentina',
        emoji: '🇦🇷'
    },
    {
        country: 'Belgium',
        emoji: '🇧🇪'
    },
    {
        country: 'Brazil',
        emoji: '🇧🇷'
    },
    {
        country: 'Cameroon',
        emoji: '🇨🇲'
    },
    {
        country: 'China',
        emoji: '🇨🇳'
    },
    {
        country: 'Costa Rica',
        emoji: '🇨🇷'
    },
    {
        country: 'Croatia',
        emoji: '🇭🇷'
    },
    {
        country: 'Denmark',
        emoji: '🇩🇰'
    },
    {
        country: 'Ecuador',
        emoji: '🇪🇨'
    },
    {
        country: 'England',
        emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿'
    },
    {
        country: 'France',
        emoji: '🇫🇷'
    },
    {
        country: 'Germany',
        emoji: '🇩🇪'
    },
    {
        country: 'Italy',
        emoji: '🇮🇹'
    },
    {
        country: 'Japan',
        emoji: '🇯🇵'
    },
    {
        country: 'Mexico',
        emoji: '🇲🇽'
    },
    {
        country: 'Nigeria',
        emoji: '🇳🇬'
    },
    {
        country: 'Paraguay',
        emoji: '🇵🇾'
    },
    {
        country: 'Poland',
        emoji: '🇵🇱'
    },
    {
        country: 'Portugal',
        emoji: '🇵🇹'
    },
    {
        country: 'Republic of Ireland',
        emoji: '🇮🇪'
    },
    {
        country: 'Russia',
        emoji: '🇷🇺'
    },
    {
        country: 'Saudi Arabia',
        emoji: '🇸🇦'
    },
    {
        country: 'Senegal',
        emoji: '🇸🇳'
    },
    {
        country: 'Slovenia',
        emoji: '🇸🇮'
    },
    {
        country: 'South Africa',
        emoji: '🇿🇦'
    },
    {
        country: 'South Korea',
        emoji: '🇰🇷'
    },
    {
        country: 'Spain',
        emoji: '🇪🇸'
    },
    {
        country: 'Sweden',
        emoji: '🇸🇪'
    },
    {
        country: 'Tunisia',
        emoji: '🇹🇳'
    },
    {
        country: 'Turkey',
        emoji: '🇹🇷'
    },
    {
        country: 'United States',
        emoji: '🇺🇸'
    },
    {
        country: 'Uruguay',
        emoji: '🇺🇾'
    }
]

function autoScrollFlagBanner() {
    const flagBanner = document.querySelector('.flags-banner');
    wc2002Flags.forEach(flag => {
        const flagEmoji = document.createElement('span');
        flagEmoji.textContent = flag.emoji;
        flagBanner.appendChild(flagEmoji);
    });

    let scrollAmount = 0;
    const scrollSpeed = 0.5;
    const scrollDirection = 1;
    const scrollWidth = flagBanner.scrollWidth;
    const scrollInterval = setInterval(() => {
        flagBanner.scrollTo(scrollAmount, 0);
        scrollAmount += scrollSpeed * scrollDirection;
        if (scrollAmount >= scrollWidth) {
            scrollAmount = 0;
        }
    }, 1000 / 60);

    // Clone the flags to create a seamless loop
    wc2002Flags.forEach(flag => {
        const flagEmoji = document.createElement('span');
        flagEmoji.textContent = flag.emoji;
        flagBanner.appendChild(flagEmoji);
    });
}

autoScrollFlagBanner();