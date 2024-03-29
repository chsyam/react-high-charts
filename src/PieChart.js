import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = () => {

    const chrome = [
        [
            'v65.0',
            0.1
        ],
        [
            'v64.0',
            1.3
        ],
        [
            'v63.0',
            51.02
        ],
        [
            'v62.0',
            1.4
        ],
        [
            'v61.0',
            0.88
        ],
        [
            'v60.0',
            0.56
        ],
        [
            'v59.0',
            0.45
        ],
        [
            'v58.0',
            0.49
        ],
        [
            'v57.0',
            0.32
        ],
        [
            'v56.0',
            0.29
        ],
        [
            'v55.0',
            0.79
        ],
        [
            'v54.0',
            0.18
        ],
        [
            'v51.0',
            0.13
        ],
        [
            'v49.0',
            2.16
        ],
        [
            'v48.0',
            0.13
        ],
        [
            'v47.0',
            0.11
        ],
        [
            'v43.0',
            0.17
        ],
        [
            'v29.0',
            0.26
        ]
    ];

    const Firefox = [
        [
            'v58.0',
            1.02
        ],
        [
            'v57.0',
            7.36
        ],
        [
            'v56.0',
            0.35
        ],
        [
            'v55.0',
            0.11
        ],
        [
            'v54.0',
            0.1
        ],
        [
            'v52.0',
            0.95
        ],
        [
            'v51.0',
            0.15
        ],
        [
            'v50.0',
            0.1
        ],
        [
            'v48.0',
            0.31
        ],
        [
            'v47.0',
            0.12
        ]
    ];

    const IEx = [
        [
            'v11.0',
            6.2
        ],
        [
            'v10.0',
            0.29
        ],
        [
            'v9.0',
            0.27
        ],
        [
            'v8.0',
            0.47
        ]
    ];

    const safari = [
        [
            'v11.0',
            3.39
        ],
        [
            'v10.1',
            0.96
        ],
        [
            'v10.0',
            0.36
        ],
        [
            'v9.1',
            0.54
        ],
        [
            'v9.0',
            0.13
        ],
        [
            'v5.1',
            0.2
        ]
    ];

    const Edge = [
        [
            'v16',
            2.6
        ],
        [
            'v15',
            0.92
        ],
        [
            'v14',
            0.4
        ],
        [
            'v13',
            0.1
        ]
    ];

    const Opera = [
        [
            'v50.0',
            0.96
        ],
        [
            'v49.0',
            0.82
        ],
        [
            'v12.1',
            0.14
        ]
    ];

    const graphData = [
        {
            name: 'Chrome',
            y: 63.06,
            drilldown: 'Chrome'
        },
        {
            name: 'Safari',
            y: 19.84,
            drilldown: 'Safari'
        },
        {
            name: 'Firefox',
            y: 4.18,
            drilldown: 'Firefox'
        },
        {
            name: 'Edge',
            y: 4.12,
            drilldown: 'Edge'
        },
        {
            name: 'Opera',
            y: 2.33,
            drilldown: 'Opera'
        },
        {
            name: 'Internet Explorer',
            y: 0.45,
            drilldown: 'Internet Explorer'
        },
        {
            name: 'Other',
            y: 1.582,
            drilldown: null
        }
    ];

    const [showdata, setShowData] = useState(graphData);
    const [categoryName, setCategoryName] = useState("");

    const handleClick = (name) => {
        console.log(name)
        name === "Chrome" && setShowData(chrome);
        name === "Firefox" && setShowData(Firefox);
        name === "Internet Explorer" && setShowData(IEx);
        name === "Safari" && setShowData(safari);
        name === "Edge" && setShowData(Edge);
        name === "Opera" && setShowData(Opera);
    }

    const options = {
        chart: {
            type: 'pie'
        },
        credits: {
            enabled: false
        },
        title: {
            align: 'left',
            text: null
        },
        subtitle: {
            align: 'left',
            text: null
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        xAxis: {
            type: 'category',
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                    format: '{point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [
            {
                name: 'Browsers',
                colorByPoint: true,
                data: showdata,
                point: {
                    events: {
                        click: function () {
                            categoryName === "" && setCategoryName(this.name)
                            handleClick(this.name)
                        },
                    },
                },
            }
        ],
        drilldown: {
            breadcrumbs: {
                position: {
                    align: 'right'
                }
            },
        }
    };

    return (
        <div>
            <div className='breadCrumb'>
                {
                    categoryName &&
                    <div>
                        <button onClick={() => {
                            setCategoryName("");
                            setShowData(graphData);
                        }}>Browsers</button>/{categoryName}
                    </div>
                }
            </div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default PieChart;
