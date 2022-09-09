const randomRewards = function() {
    const titles = ['champ!', 'darling', 'handsome', 'beautiful']
    const words = ['you deserve', 'how about', 'you will get']
    const prizes = ['a high paying job', 'a new house', 'a million dollars', 'a vacation to santorini', 'a new car', 'a new wardrobe']
    const adjectives = ['for being amazing', 'for a job well done', 'for not giving up']
    
    let title = titles[Math.floor(Math.random() * titles.length)]
    let word = words[Math.floor(Math.random() * words.length)]
    let prize = prizes[Math.floor(Math.random() * prizes.length)]
    let adjective = adjectives[Math.floor(Math.random() * adjectives.length)]

    return `Hey, ${title} ${word} ${prize} ${adjective}.`
}
alert(randomRewards())