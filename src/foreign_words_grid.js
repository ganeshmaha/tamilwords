    new gridjs.Grid({
    columns: [
	 {
        id: 'fw',
        name: gridjs.html('Foreign Word')
      },
 	 {
        id: 'tw',
        name: gridjs.html('Tamil Word')
      }
	],
	pagination: {
		limit:10
	},
	server: {
    	url: 'manavai_words_list.json',
    	then: data => data.map(card => [card.fw, card.tw]),
    	handle: (res) => {
      // no matching records found
      if (res.status === 404) return {data: []};
      if (res.ok) return res.json();
      throw Error('oh no :(');
    	}
	},
	search: {
    	enabled: true
  	}
,
  }).render(document.getElementById("wrapper"));
