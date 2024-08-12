import type { ChartData } from "@/app/crm/dashboard/charts-interfaces";

export const mockGSTCartData = [
  {
    gstID: '2024-03-03T18:00:00-GST-001',
    startTime: '2024-03-03T18:00Z',
    allKpIndex: [
      {
        observedTime: '2024-03-03T21:00Z',
        kpIndex: 5.67,
        source: 'NOAA',
      },
    ],
    linkedEvents: [
      {
        activityID: '2024-02-28T17:48:00-CME-001',
      },
      {
        activityID: '2024-03-03T08:47:00-IPS-001',
      },
    ],
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/GST/29440/-1',
    submissionTime: '2024-03-03T21:35Z',
  },
  {
    gstID: '2024-03-23T21:00:00-GST-001',
    startTime: '2024-03-23T21:00Z',
    allKpIndex: [
      {
        observedTime: '2024-03-24T00:00Z',
        kpIndex: 5.67,
        source: 'NOAA',
      },
    ],
    linkedEvents: [
      {
        activityID: '2024-03-23T12:49:00-IPS-001',
      },
      {
        activityID: '2024-03-23T15:35:00-HSS-001',
      },
    ],
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/GST/29751/-1',
    submissionTime: '2024-03-24T00:33Z',
  },
  {
    gstID: '2024-03-24T12:00:00-GST-001',
    startTime: '2024-03-24T12:00Z',
    allKpIndex: [
      {
        observedTime: '2024-03-24T15:00Z',
        kpIndex: 6,
        source: 'NOAA',
      },
      {
        observedTime: '2024-03-24T15:00Z',
        kpIndex: 6,
        source: 'NOAA',
      },
      {
        observedTime: '2024-03-24T18:00Z',
        kpIndex: 8,
        source: 'NOAA',
      },
      {
        observedTime: '2024-03-24T21:00Z',
        kpIndex: 6.33,
        source: 'NOAA',
      },
    ],
    linkedEvents: [
      {
        activityID: '2024-03-23T01:25:00-CME-001',
      },
      {
        activityID: '2024-03-23T01:48:00-CME-001',
      },
      {
        activityID: '2024-03-24T14:10:00-IPS-001',
      },
      {
        activityID: '2024-03-24T16:25:00-MPC-001',
      },
    ],
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/GST/29769/-1',
    submissionTime: '2024-03-24T15:31Z',
  },
];

export const mockFLRCartData = [
  {
    flrID: '2023-05-01T00:55:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-01T00:55Z',
    peakTime: '2023-05-01T01:21Z',
    endTime: '2023-05-01T01:29Z',
    classType: 'M1.1',
    sourceLocation: 'S24W42',
    activeRegionNum: 13288,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-01T12:05Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/24869/-1',
  },
  {
    flrID: '2023-05-01T02:48:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-01T02:48Z',
    peakTime: '2023-05-01T03:02Z',
    endTime: '2023-05-01T03:17Z',
    classType: 'C3.6',
    sourceLocation: 'N13E80',
    activeRegionNum: 13293,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-05-01T03:24:00-CME-001',
      },
    ],
    submissionTime: '2023-05-01T19:17Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/24887/-1',
  },
  {
    flrID: '2023-05-01T13:02:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-01T13:02Z',
    peakTime: '2023-05-01T13:09Z',
    endTime: '2023-05-01T13:13Z',
    classType: 'M7.1',
    sourceLocation: 'S24W46',
    activeRegionNum: 13288,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-01T20:19Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/24870/-1',
  },
  {
    flrID: '2023-05-01T22:19:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-01T22:19Z',
    peakTime: '2023-05-01T22:32Z',
    endTime: '2023-05-01T22:42Z',
    classType: 'C7.4',
    sourceLocation: 'N08E95',
    activeRegionNum: null,
    note: 'Associated with an unnumbered Active Region beyond the eastern limb.',
    linkedEvents: [
      {
        activityID: '2023-05-01T23:12:00-CME-001',
      },
    ],
    submissionTime: '2023-05-02T17:46Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/24898/-1',
  },
  {
    flrID: '2023-05-03T09:15:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-03T09:15Z',
    peakTime: '2023-05-03T09:27Z',
    endTime: '2023-05-03T09:33Z',
    classType: 'M4.2',
    sourceLocation: 'N13E43',
    activeRegionNum: 13293,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-03T12:56Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/24918/-1',
  },
  {
    flrID: '2023-05-03T10:03:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-03T10:03Z',
    peakTime: '2023-05-03T10:14Z',
    endTime: '2023-05-03T10:19Z',
    classType: 'M3.1',
    sourceLocation: 'N12E42',
    activeRegionNum: 13293,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-03T12:59Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/24919/-1',
  },
  {
    flrID: '2023-05-03T10:36:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-03T10:36Z',
    peakTime: '2023-05-03T10:45Z',
    endTime: '2023-05-03T10:49Z',
    classType: 'M7.2',
    sourceLocation: 'N12E42',
    activeRegionNum: 13293,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-03T11:30Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/24908/-1',
  },
  {
    flrID: '2023-05-03T12:24:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-03T12:24Z',
    peakTime: '2023-05-03T12:35Z',
    endTime: '2023-05-03T12:41Z',
    classType: 'M1.7',
    sourceLocation: 'N12E41',
    activeRegionNum: 13293,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-03T13:05Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/24920/-1',
  },
  {
    flrID: '2023-05-03T13:43:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-03T13:43Z',
    peakTime: '2023-05-03T13:50Z',
    endTime: '2023-05-03T13:54Z',
    classType: 'M2.2',
    sourceLocation: 'N12E40',
    activeRegionNum: 13293,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-03T14:04Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/24921/-1',
  },
  {
    flrID: '2023-05-04T08:05:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-04T08:05Z',
    peakTime: '2023-05-04T08:44Z',
    endTime: '2023-05-04T09:08Z',
    classType: 'M3.9',
    sourceLocation: 'N16E45',
    activeRegionNum: 13296,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-05-04T09:09:00-CME-001',
      },
    ],
    submissionTime: '2023-05-04T11:51Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/24928/-1',
  },
  {
    flrID: '2023-05-05T06:52:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-05T06:52Z',
    peakTime: '2023-05-05T07:06Z',
    endTime: '2023-05-05T07:16Z',
    classType: 'C9.5',
    sourceLocation: 'N8E55',
    activeRegionNum: 13297,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-05T12:01Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/24941/-1',
  },
  {
    flrID: '2023-05-05T07:30:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-05T07:30Z',
    peakTime: '2023-05-05T08:01Z',
    endTime: '2023-05-05T08:33Z',
    classType: 'M2.1',
    sourceLocation: 'N15E30',
    activeRegionNum: 13296,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-05-05T08:12:00-CME-001',
      },
    ],
    submissionTime: '2023-05-05T12:05Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/24942/-1',
  },
  {
    flrID: '2023-05-05T15:18:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-05T15:18Z',
    peakTime: '2023-05-05T15:31Z',
    endTime: '2023-05-05T15:39Z',
    classType: 'M1.2',
    sourceLocation: 'N16E27',
    activeRegionNum: 13296,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-05T15:57Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/24951/-1',
  },
  {
    flrID: '2023-05-07T21:40:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-07T21:40Z',
    peakTime: '2023-05-07T22:34Z',
    endTime: '2023-05-07T22:53Z',
    classType: 'M1.5',
    sourceLocation: 'N17W07',
    activeRegionNum: 13296,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-08T11:40Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/24995/-1',
  },
  {
    flrID: '2023-05-07T22:53:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-07T22:53Z',
    peakTime: '2023-05-07T23:23Z',
    endTime: '2023-05-08T00:01Z',
    classType: 'M1.6',
    sourceLocation: 'N17W07',
    activeRegionNum: 13296,
    note: 'Long duration flare associated with halo CME: 2023-05-07T23:12Z',
    linkedEvents: [
      {
        activityID: '2023-05-07T23:12:00-CME-001',
      },
      {
        activityID: '2023-05-08T06:19:00-SEP-001',
      },
      {
        activityID: '2023-05-08T11:45:00-SEP-001',
      },
      {
        activityID: '2023-05-08T13:13:00-SEP-001',
      },
    ],
    submissionTime: '2023-05-08T11:45Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/24996/-1',
  },
  {
    flrID: '2023-05-08T20:11:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-08T20:11Z',
    peakTime: '2023-05-08T20:25Z',
    endTime: '2023-05-08T20:33Z',
    classType: 'M2.3',
    sourceLocation: 'N14W18',
    activeRegionNum: 13296,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-09T13:25Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25022/-1',
  },
  {
    flrID: '2023-05-09T03:42:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-09T03:42Z',
    peakTime: '2023-05-09T03:54Z',
    endTime: '2023-05-09T04:05Z',
    classType: 'M6.5',
    sourceLocation: 'N14W26',
    activeRegionNum: 13296,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-05-09T04:24:00-CME-001',
      },
    ],
    submissionTime: '2023-05-09T12:17Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25018/-1',
  },
  {
    flrID: '2023-05-09T05:55:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-09T05:55Z',
    peakTime: '2023-05-09T06:13Z',
    endTime: '2023-05-09T06:28Z',
    classType: 'M1.2',
    sourceLocation: 'N14W24',
    activeRegionNum: 13296,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-05-09T06:48:00-CME-001',
      },
    ],
    submissionTime: '2023-05-09T13:25Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25023/-1',
  },
  {
    flrID: '2023-05-09T07:58:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-09T07:58Z',
    peakTime: '2023-05-09T08:14Z',
    endTime: '2023-05-09T08:28Z',
    classType: 'C5.2',
    sourceLocation: 'N20W23',
    activeRegionNum: 13296,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-05-09T08:48:00-CME-001',
      },
    ],
    submissionTime: '2023-05-09T19:45Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25035/-1',
  },
  {
    flrID: '2023-05-09T09:18:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-09T09:18Z',
    peakTime: '2023-05-09T09:28Z',
    endTime: '2023-05-09T09:40Z',
    classType: 'C4.3',
    sourceLocation: 'N16W22',
    activeRegionNum: 13296,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-05-09T10:23:00-CME-001',
      },
    ],
    submissionTime: '2023-05-09T19:25Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25034/-1',
  },
  {
    flrID: '2023-05-09T10:00:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-09T10:00Z',
    peakTime: '2023-05-09T10:20Z',
    endTime: '2023-05-09T10:33Z',
    classType: 'M1.3',
    sourceLocation: 'N14W32',
    activeRegionNum: 13296,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-09T13:26Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25024/-1',
  },
  {
    flrID: '2023-05-09T11:59:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-09T11:59Z',
    peakTime: '2023-05-09T12:11Z',
    endTime: '2023-05-09T12:22Z',
    classType: 'C4.0',
    sourceLocation: 'N13W30',
    activeRegionNum: 13296,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-05-09T13:25:00-CME-001',
      },
    ],
    submissionTime: '2023-05-09T20:22Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25042/-1',
  },
  {
    flrID: '2023-05-09T18:20:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-09T18:20Z',
    peakTime: '2023-05-09T18:58Z',
    endTime: '2023-05-09T19:24Z',
    classType: 'M4.2',
    sourceLocation: 'N17W32',
    activeRegionNum: 13296,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-05-09T19:00:00-CME-001',
      },
      {
        activityID: '2023-05-09T20:39:00-SEP-001',
      },
      {
        activityID: '2023-05-09T22:31:00-SEP-001',
      },
      {
        activityID: '2023-05-09T22:52:00-SEP-001',
      },
      {
        activityID: '2023-05-09T23:15:00-SEP-001',
      },
    ],
    submissionTime: '2023-05-09T20:25Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25043/-1',
  },
  {
    flrID: '2023-05-09T20:32:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-09T20:32Z',
    peakTime: '2023-05-09T20:52Z',
    endTime: '2023-05-09T21:13Z',
    classType: 'M5.0',
    sourceLocation: 'N13W36',
    activeRegionNum: 13296,
    note: 'This flare follows a previous M4.3 class flare that peaked at 18:58Z from the same active region. There is an eruption that precedes this flare but follows the previous one. Events are under analysis.',
    linkedEvents: [
      {
        activityID: '2023-05-09T19:00:00-CME-001',
      },
      {
        activityID: '2023-05-09T20:39:00-SEP-001',
      },
      {
        activityID: '2023-05-09T21:09:00-CME-001',
      },
      {
        activityID: '2023-05-09T22:31:00-SEP-001',
      },
      {
        activityID: '2023-05-09T22:52:00-SEP-001',
      },
      {
        activityID: '2023-05-09T23:15:00-SEP-001',
      },
    ],
    submissionTime: '2023-05-09T21:57Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25048/-1',
  },
  {
    flrID: '2023-05-10T14:11:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-10T14:11Z',
    peakTime: '2023-05-10T14:21Z',
    endTime: '2023-05-10T14:33Z',
    classType: 'M2.2',
    sourceLocation: 'N13W47',
    activeRegionNum: 13296,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-05-10T15:05:00-CME-001',
      },
    ],
    submissionTime: '2023-05-10T15:53Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25071/-1',
  },
  {
    flrID: '2023-05-11T08:47:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-11T08:47Z',
    peakTime: '2023-05-11T09:01Z',
    endTime: '2023-05-11T09:11Z',
    classType: 'M2.1',
    sourceLocation: 'S07W38',
    activeRegionNum: 13294,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-05-11T09:36:00-CME-001',
      },
    ],
    submissionTime: '2023-05-11T11:01Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25083/-1',
  },
  {
    flrID: '2023-05-11T18:13:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-11T18:13Z',
    peakTime: '2023-05-11T18:29Z',
    endTime: '2023-05-11T18:38Z',
    classType: 'M1.8',
    sourceLocation: 'S06W46',
    activeRegionNum: 13294,
    note: 'This flare is immediately preceded by a C-class flare, with approximate peak intensity C7.9 and peak time 2023-05-11T18:23Z from AR 3297 (N10W40).',
    linkedEvents: [
      {
        activityID: '2023-05-11T19:00:00-CME-001',
      },
    ],
    submissionTime: '2023-05-11T18:53Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25099/-1',
  },
  {
    flrID: '2023-05-12T23:53:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-12T23:53Z',
    peakTime: '2023-05-13T00:45Z',
    endTime: '2023-05-13T01:31Z',
    classType: 'C9.0',
    sourceLocation: 'N15W76',
    activeRegionNum: 13296,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-05-13T00:12:00-CME-001',
      },
    ],
    submissionTime: '2023-05-16T12:43Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25127/-1',
  },
  {
    flrID: '2023-05-16T16:31:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-16T16:31Z',
    peakTime: '2023-05-16T16:43Z',
    endTime: '2023-05-16T16:51Z',
    classType: 'M9.6',
    sourceLocation: 'S25E90',
    activeRegionNum: 13310,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-18T15:26Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25164/-1',
  },
  {
    flrID: '2023-05-18T06:13:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-18T06:13Z',
    peakTime: '2023-05-18T06:26Z',
    endTime: '2023-05-18T06:49Z',
    classType: 'M1.0',
    sourceLocation: 'N17E90',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-18T18:09Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25205/-1',
  },
  {
    flrID: '2023-05-18T06:48:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-18T06:48Z',
    peakTime: '2023-05-18T06:55Z',
    endTime: '2023-05-18T07:02Z',
    classType: 'M1.2',
    sourceLocation: 'N17E90',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-18T18:09Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25206/-1',
  },
  {
    flrID: '2023-05-18T11:32:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-18T11:32Z',
    peakTime: '2023-05-18T11:47Z',
    endTime: '2023-05-18T12:13Z',
    classType: 'M2.2',
    sourceLocation: 'N17E89',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-18T18:09Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25207/-1',
  },
  {
    flrID: '2023-05-18T12:00:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-18T12:00Z',
    peakTime: '2023-05-18T12:13Z',
    endTime: '2023-05-18T12:22Z',
    classType: 'M1.9',
    sourceLocation: 'N17E89',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-18T18:09Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25209/-1',
  },
  {
    flrID: '2023-05-18T12:39:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-18T12:39Z',
    peakTime: '2023-05-18T12:49Z',
    endTime: '2023-05-18T12:56Z',
    classType: 'M1.6',
    sourceLocation: 'N18E88',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-18T18:09Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25210/-1',
  },
  {
    flrID: '2023-05-18T17:32:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-18T17:32Z',
    peakTime: '2023-05-18T17:51Z',
    endTime: '2023-05-18T18:01Z',
    classType: 'M1.1',
    sourceLocation: 'N17E87',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-18T18:08Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25221/-1',
  },
  {
    flrID: '2023-05-18T20:12:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-18T20:12Z',
    peakTime: '2023-05-18T20:23Z',
    endTime: '2023-05-18T20:51Z',
    classType: 'M3.8',
    sourceLocation: 'N17E80',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-19T12:40Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25226/-1',
  },
  {
    flrID: '2023-05-18T20:51:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-18T20:51Z',
    peakTime: '2023-05-18T21:05Z',
    endTime: '2023-05-18T21:16Z',
    classType: 'M4.5',
    sourceLocation: 'N18E80',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-19T14:24Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25227/-1',
  },
  {
    flrID: '2023-05-19T00:41:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-19T00:41Z',
    peakTime: '2023-05-19T00:48Z',
    endTime: '2023-05-19T00:54Z',
    classType: 'M5.3',
    sourceLocation: 'N18E70',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-19T12:12Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25222/-1',
  },
  {
    flrID: '2023-05-19T03:05:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-19T03:05Z',
    peakTime: '2023-05-19T03:12Z',
    endTime: '2023-05-19T03:23Z',
    classType: 'M1.6',
    sourceLocation: 'N17E75',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-19T14:25Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25228/-1',
  },
  {
    flrID: '2023-05-19T04:49:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-19T04:49Z',
    peakTime: '2023-05-19T05:00Z',
    endTime: '2023-05-19T05:10Z',
    classType: 'M2.5',
    sourceLocation: 'N17E75',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-19T14:25Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25229/-1',
  },
  {
    flrID: '2023-05-19T19:40:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-19T19:40Z',
    peakTime: '2023-05-19T20:06Z',
    endTime: '2023-05-19T20:14Z',
    classType: 'M2.3',
    sourceLocation: 'N18E70',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-20T13:16Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25244/-1',
  },
  {
    flrID: '2023-05-19T20:14:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-19T20:14Z',
    peakTime: '2023-05-19T20:26Z',
    endTime: '2023-05-19T20:38Z',
    classType: 'M2.7',
    sourceLocation: 'N17E64',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-20T13:29Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25255/-1',
  },
  {
    flrID: '2023-05-20T06:49:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-20T06:49Z',
    peakTime: '2023-05-20T07:02Z',
    endTime: '2023-05-20T07:12Z',
    classType: 'M1.0',
    sourceLocation: 'N17E62',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-20T13:14Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25254/-1',
  },
  {
    flrID: '2023-05-20T07:16:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-20T07:16Z',
    peakTime: '2023-05-20T07:32Z',
    endTime: '2023-05-20T07:36Z',
    classType: 'M6.4',
    sourceLocation: 'N17E56',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-20T12:17Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25246/-1',
  },
  {
    flrID: '2023-05-20T09:18:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-20T09:18Z',
    peakTime: '2023-05-20T09:27Z',
    endTime: '2023-05-20T09:32Z',
    classType: 'M1.1',
    sourceLocation: 'S25E65',
    activeRegionNum: 13312,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-20T14:24Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25257/-1',
  },
  {
    flrID: '2023-05-20T10:48:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-20T10:48Z',
    peakTime: '2023-05-20T10:54Z',
    endTime: '2023-05-20T11:10Z',
    classType: 'M1.6',
    sourceLocation: 'N17E53',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-20T14:01Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25258/-1',
  },
  {
    flrID: '2023-05-20T12:25:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-20T12:25Z',
    peakTime: '2023-05-20T12:35Z',
    endTime: '2023-05-20T12:40Z',
    classType: 'M8.9',
    sourceLocation: 'N17E53',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-20T13:12Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25249/-1',
  },
  {
    flrID: '2023-05-20T14:54:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-20T14:54Z',
    peakTime: '2023-05-20T15:00Z',
    endTime: '2023-05-20T15:04Z',
    classType: 'M5.6',
    sourceLocation: 'N17E52',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-20T15:18Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25260/-1',
  },
  {
    flrID: '2023-05-20T18:57:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-20T18:57Z',
    peakTime: '2023-05-20T19:03Z',
    endTime: '2023-05-20T19:07Z',
    classType: 'M1.1',
    sourceLocation: 'N17E50',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-20T19:18Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25266/-1',
  },
  {
    flrID: '2023-05-20T22:52:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-20T22:52Z',
    peakTime: '2023-05-20T23:06Z',
    endTime: '2023-05-20T23:21Z',
    classType: 'M5.1',
    sourceLocation: 'N17E48',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-21T12:20Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25269/-1',
  },
  {
    flrID: '2023-05-20T23:08:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-20T23:08Z',
    peakTime: '2023-05-20T23:10Z',
    endTime: '2023-05-20T23:21Z',
    classType: 'M5.1',
    sourceLocation: 'N17E48',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-21T12:18Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25271/-1',
  },
  {
    flrID: '2023-05-21T15:49:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-21T15:49Z',
    peakTime: '2023-05-21T16:04Z',
    endTime: '2023-05-21T16:18Z',
    classType: 'M2.6',
    sourceLocation: 'N17E38',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-21T18:21Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25287/-1',
  },
  {
    flrID: '2023-05-22T13:30:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-22T13:30Z',
    peakTime: '2023-05-22T13:37Z',
    endTime: '2023-05-22T13:47Z',
    classType: 'M1.9',
    sourceLocation: 'S25E36',
    activeRegionNum: 13312,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-05-22T14:09:00-CME-001',
      },
    ],
    submissionTime: '2023-05-22T16:48Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25300/-1',
  },
  {
    flrID: '2023-05-23T12:07:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-23T12:07Z',
    peakTime: '2023-05-23T12:13Z',
    endTime: '2023-05-23T12:17Z',
    classType: 'M3.0',
    sourceLocation: 'N18E13',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-23T12:35Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25310/-1',
  },
  {
    flrID: '2023-05-24T09:51:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-24T09:51Z',
    peakTime: '2023-05-24T09:58Z',
    endTime: '2023-05-24T10:02Z',
    classType: 'M1.0',
    sourceLocation: 'N18W00',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-24T11:02Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25331/-1',
  },
  {
    flrID: '2023-05-24T17:04:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-24T17:04Z',
    peakTime: '2023-05-24T17:21Z',
    endTime: '2023-05-24T17:48Z',
    classType: 'M1.8',
    sourceLocation: 'N18W04',
    activeRegionNum: 13311,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-24T17:53Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25345/-1',
  },
  {
    flrID: '2023-05-25T14:37:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-25T14:37Z',
    peakTime: '2023-05-25T14:46Z',
    endTime: '2023-05-25T14:53Z',
    classType: 'M1.1',
    sourceLocation: 'S25W06',
    activeRegionNum: 13312,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-05-25T15:36:00-CME-001',
      },
    ],
    submissionTime: '2023-05-25T15:08Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25350/-1',
  },
  {
    flrID: '2023-05-26T22:48:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-26T22:48Z',
    peakTime: '2023-05-26T23:03Z',
    endTime: '2023-05-26T23:13Z',
    classType: 'M1.3',
    sourceLocation: 'S16E6',
    activeRegionNum: 13315,
    note: 'AR 3311 also had a flare at the same time, possibly contributing to this flare.',
    linkedEvents: null,
    submissionTime: '2023-05-27T12:25Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25376/-1',
  },
  {
    flrID: '2023-05-27T19:12:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-27T19:12Z',
    peakTime: '2023-05-27T19:24Z',
    endTime: '2023-05-27T19:30Z',
    classType: 'C6.2',
    sourceLocation: 'S25W35',
    activeRegionNum: 13312,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-05-27T20:00:00-CME-001',
      },
    ],
    submissionTime: '2023-05-28T15:48Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25397/-1',
  },
  {
    flrID: '2023-05-28T10:21:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-28T10:21Z',
    peakTime: '2023-05-28T10:36Z',
    endTime: '2023-05-28T10:55Z',
    classType: 'M1.0',
    sourceLocation: 'S15W14',
    activeRegionNum: 13315,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-28T12:10Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25391/-1',
  },
  {
    flrID: '2023-05-30T07:54:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-30T07:54Z',
    peakTime: '2023-05-30T08:10Z',
    endTime: '2023-05-30T08:19Z',
    classType: 'M1.2',
    sourceLocation: 'S22W90',
    activeRegionNum: 13310,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-30T12:35Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25413/-1',
  },
  {
    flrID: '2023-05-30T10:15:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-30T10:15Z',
    peakTime: '2023-05-30T10:22Z',
    endTime: '2023-05-30T10:29Z',
    classType: 'M1.3',
    sourceLocation: 'S22W90',
    activeRegionNum: 13310,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-30T12:37Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25414/-1',
  },
  {
    flrID: '2023-05-30T13:36:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-30T13:36Z',
    peakTime: '2023-05-30T13:38Z',
    endTime: '2023-05-30T13:41Z',
    classType: 'M1.4',
    sourceLocation: 'S16W42',
    activeRegionNum: 13315,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-31T16:44Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25415/-1',
  },
  {
    flrID: '2023-05-31T04:24:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-31T04:24Z',
    peakTime: '2023-05-31T04:38Z',
    endTime: '2023-05-31T04:44Z',
    classType: 'M1.3',
    sourceLocation: 'S09E88',
    activeRegionNum: 13323,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-31T12:05Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25417/-1',
  },
  {
    flrID: '2023-05-31T12:23:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-31T12:23Z',
    peakTime: '2023-05-31T12:26Z',
    endTime: '2023-05-31T12:30Z',
    classType: 'M1.0',
    sourceLocation: 'S18W22',
    activeRegionNum: 13319,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-05-31T12:49Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25418/-1',
  },
  {
    flrID: '2023-05-31T21:47:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-31T21:47Z',
    peakTime: '2023-05-31T22:08Z',
    endTime: '2023-05-31T22:14Z',
    classType: 'M1.0',
    sourceLocation: 'S07E89',
    activeRegionNum: 13323,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-06-01T12:34Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25432/-1',
  },
  {
    flrID: '2023-05-31T22:14:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-05-31T22:14Z',
    peakTime: '2023-05-31T22:52Z',
    endTime: '2023-05-31T23:12Z',
    classType: 'M4.2',
    sourceLocation: 'S07E82',
    activeRegionNum: 13323,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-06-01T12:30Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25431/-1',
  },
  {
    flrID: '2023-06-01T00:20:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-01T00:20Z',
    peakTime: '2023-06-01T00:41Z',
    endTime: '2023-06-01T00:56Z',
    classType: 'C9.1',
    sourceLocation: 'N24W80',
    activeRegionNum: 13313,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-06-01T00:36:00-CME-001',
      },
    ],
    submissionTime: '2023-06-01T12:26Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25430/-1',
  },
  {
    flrID: '2023-06-02T02:32:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-02T02:32Z',
    peakTime: '2023-06-02T02:41Z',
    endTime: '2023-06-02T02:45Z',
    classType: 'M1.5',
    sourceLocation: 'N18E02',
    activeRegionNum: 13324,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-06-02T11:55Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25440/-1',
  },
  {
    flrID: '2023-06-07T06:16:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-07T06:16Z',
    peakTime: '2023-06-07T06:45Z',
    endTime: '2023-06-07T07:10Z',
    classType: 'C7.1',
    sourceLocation: 'S22E40',
    activeRegionNum: 13327,
    note: 'Associated with a minor filament eruption south of AR13327 (located S14E36).',
    linkedEvents: [
      {
        activityID: '2023-06-07T07:00:00-CME-001',
      },
    ],
    submissionTime: '2023-06-07T15:58Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25492/-1',
  },
  {
    flrID: '2023-06-07T11:18:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-07T11:18Z',
    peakTime: '2023-06-07T11:46Z',
    endTime: '2023-06-07T11:59Z',
    classType: 'M4.7',
    sourceLocation: 'S14E33',
    activeRegionNum: 13327,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-06-07T12:48:00-CME-001',
      },
    ],
    submissionTime: '2023-06-07T12:52Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25480/-1',
  },
  {
    flrID: '2023-06-07T18:25:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-07T18:25Z',
    peakTime: '2023-06-07T18:35Z',
    endTime: '2023-06-07T18:54Z',
    classType: 'C9.2',
    sourceLocation: 'S14E29',
    activeRegionNum: 13327,
    note: 'Long duration flare consisting of multiple rises/falls',
    linkedEvents: null,
    submissionTime: '2023-06-07T19:04Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25496/-1',
  },
  {
    flrID: '2023-06-09T16:48:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-09T16:48Z',
    peakTime: '2023-06-09T17:11Z',
    endTime: '2023-06-09T17:25Z',
    classType: 'M2.5',
    sourceLocation: 'S22E48',
    activeRegionNum: 13331,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-06-09T17:36:00-CME-001',
      },
    ],
    submissionTime: '2023-06-09T18:40Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25514/-1',
  },
  {
    flrID: '2023-06-15T12:33:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-15T12:33Z',
    peakTime: '2023-06-15T12:55Z',
    endTime: '2023-06-15T14:18Z',
    classType: 'C9.7',
    sourceLocation: 'S25E65',
    activeRegionNum: 13336,
    note: 'Long-duration flare associated with eruptive activity from near the vicinity of Active Region 13336.',
    linkedEvents: null,
    submissionTime: '2023-06-16T15:51Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25569/-1',
  },
  {
    flrID: '2023-06-16T05:21:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-16T05:21Z',
    peakTime: '2023-06-16T05:30Z',
    endTime: '2023-06-16T05:41Z',
    classType: 'M1.0',
    sourceLocation: 'N17E66',
    activeRegionNum: 13337,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-06-16T05:48:00-CME-001',
      },
    ],
    submissionTime: '2023-06-16T11:52Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25580/-1',
  },
  {
    flrID: '2023-06-16T10:20:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-16T10:20Z',
    peakTime: '2023-06-16T10:38Z',
    endTime: '2023-06-16T10:59Z',
    classType: 'M1.0',
    sourceLocation: 'N11E67',
    activeRegionNum: 13338,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-06-16T11:09:00-CME-001',
      },
    ],
    submissionTime: '2023-06-16T11:54Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25581/-1',
  },
  {
    flrID: '2023-06-16T19:52:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-16T19:52Z',
    peakTime: '2023-06-16T19:59Z',
    endTime: '2023-06-16T20:07Z',
    classType: 'M1.0',
    sourceLocation: 'S25W50',
    activeRegionNum: 13331,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-06-17T16:46Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25605/-1',
  },
  {
    flrID: '2023-06-18T00:25:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-18T00:25Z',
    peakTime: '2023-06-18T00:31Z',
    endTime: '2023-06-18T00:40Z',
    classType: 'M1.3',
    sourceLocation: 'S22E26',
    activeRegionNum: 13336,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-06-18T13:28Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25610/-1',
  },
  {
    flrID: '2023-06-18T13:25:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-18T13:25Z',
    peakTime: '2023-06-18T13:53Z',
    endTime: '2023-06-18T14:14Z',
    classType: 'M2.5',
    sourceLocation: 'S23E21',
    activeRegionNum: 13336,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-06-18T14:12:00-CME-001',
      },
    ],
    submissionTime: '2023-06-18T15:40Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25611/-1',
  },
  {
    flrID: '2023-06-19T03:37:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-19T03:37Z',
    peakTime: '2023-06-19T03:50Z',
    endTime: '2023-06-19T03:58Z',
    classType: 'M1.4',
    sourceLocation: 'S12E90',
    activeRegionNum: 13341,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-06-19T18:33Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25624/-1',
  },
  {
    flrID: '2023-06-19T12:06:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-19T12:06Z',
    peakTime: '2023-06-19T12:14Z',
    endTime: '2023-06-19T12:18Z',
    classType: 'M1.1',
    sourceLocation: 'S12E80',
    activeRegionNum: 13341,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-06-19T18:33Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25625/-1',
  },
  {
    flrID: '2023-06-20T11:09:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-20T11:09Z',
    peakTime: '2023-06-20T11:13Z',
    endTime: '2023-06-20T11:17Z',
    classType: 'M1.0',
    sourceLocation: 'S22W66',
    activeRegionNum: 13342,
    note: 'Simultaneous flaring from AR13341 (S15E70).',
    linkedEvents: null,
    submissionTime: '2023-06-20T12:38Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25631/-1',
  },
  {
    flrID: '2023-06-20T11:17:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-20T11:17Z',
    peakTime: '2023-06-20T11:25Z',
    endTime: '2023-06-20T11:35Z',
    classType: 'M1.8',
    sourceLocation: 'S22W66',
    activeRegionNum: 13342,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-06-20T12:39Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25632/-1',
  },
  {
    flrID: '2023-06-20T15:44:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-20T15:44Z',
    peakTime: '2023-06-20T15:48Z',
    endTime: '2023-06-20T15:55Z',
    classType: 'M1.0',
    sourceLocation: 'S22W68',
    activeRegionNum: 13342,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-06-20T16:07Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25635/-1',
  },
  {
    flrID: '2023-06-20T16:27:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-20T16:27Z',
    peakTime: '2023-06-20T16:33Z',
    endTime: '2023-06-20T16:42Z',
    classType: 'M1.1',
    sourceLocation: 'S22W69',
    activeRegionNum: 13342,
    note: 'Simultaneous flaring from AR13341 (S15E65).',
    linkedEvents: null,
    submissionTime: '2023-06-20T16:54Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25636/-1',
  },
  {
    flrID: '2023-06-20T16:42:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-20T16:42Z',
    peakTime: '2023-06-20T17:09Z',
    endTime: '2023-06-20T17:26Z',
    classType: 'X1.1',
    sourceLocation: 'S15E65',
    activeRegionNum: 13341,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-06-20T17:24:00-CME-001',
      },
    ],
    submissionTime: '2023-06-20T17:29Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25637/-1',
  },
  {
    flrID: '2023-06-21T12:31:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-21T12:31Z',
    peakTime: '2023-06-21T12:44Z',
    endTime: '2023-06-21T12:54Z',
    classType: 'M1.1',
    sourceLocation: 'S15E51',
    activeRegionNum: 13341,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-06-21T13:03Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25653/-1',
  },
  {
    flrID: '2023-06-21T15:31:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-21T15:31Z',
    peakTime: '2023-06-21T15:38Z',
    endTime: '2023-06-21T15:43Z',
    classType: 'M1.0',
    sourceLocation: 'N19W05',
    activeRegionNum: 13337,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-06-21T15:50Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25656/-1',
  },
  {
    flrID: '2023-06-22T10:57:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-22T10:57Z',
    peakTime: '2023-06-22T11:21Z',
    endTime: '2023-06-22T11:36Z',
    classType: 'M1.1',
    sourceLocation: 'S15E42',
    activeRegionNum: 13341,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-06-22T11:45Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25668/-1',
  },
  {
    flrID: '2023-06-22T23:29:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-22T23:29Z',
    peakTime: '2023-06-22T23:44Z',
    endTime: '2023-06-22T23:57Z',
    classType: 'M4.8',
    sourceLocation: 'S20E40',
    activeRegionNum: 13341,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-06-23T00:39:00-CME-001',
      },
    ],
    submissionTime: '2023-06-23T01:08Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25677/-1',
  },
  {
    flrID: '2023-06-24T12:11:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-24T12:11Z',
    peakTime: '2023-06-24T12:17Z',
    endTime: '2023-06-24T12:24Z',
    classType: 'M1.1',
    sourceLocation: 'N20W42',
    activeRegionNum: 13337,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-06-24T12:38:00-CME-001',
      },
    ],
    submissionTime: '2023-06-24T12:40Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25693/-1',
  },
  {
    flrID: '2023-06-26T16:08:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-26T16:08Z',
    peakTime: '2023-06-26T16:22Z',
    endTime: '2023-06-26T16:34Z',
    classType: 'M1.6',
    sourceLocation: 'N23W40',
    activeRegionNum: 13340,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-06-26T16:47Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25714/-1',
  },
  {
    flrID: '2023-06-27T14:57:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-27T14:57Z',
    peakTime: '2023-06-27T15:14Z',
    endTime: '2023-06-27T15:19Z',
    classType: 'M1.2',
    sourceLocation: 'N20W53',
    activeRegionNum: 13340,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-06-27T16:01Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25734/-1',
  },
  {
    flrID: '2023-06-27T15:19:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-27T15:19Z',
    peakTime: '2023-06-27T15:25Z',
    endTime: '2023-06-27T15:29Z',
    classType: 'C9.7',
    sourceLocation: 'N20W52',
    activeRegionNum: 13340,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-06-27T16:00Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25736/-1',
  },
  {
    flrID: '2023-06-28T08:26:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-28T08:26Z',
    peakTime: '2023-06-28T08:44Z',
    endTime: '2023-06-28T08:59Z',
    classType: 'M1.9',
    sourceLocation: 'N23W62',
    activeRegionNum: 13340,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-06-28T11:40Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25750/-1',
  },
  {
    flrID: '2023-06-29T14:00:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-06-29T14:00Z',
    peakTime: '2023-06-29T14:15Z',
    endTime: '2023-06-29T14:23Z',
    classType: 'M3.8',
    sourceLocation: 'N17W15',
    activeRegionNum: 13354,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-06-29T15:04Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25765/-1',
  },
  {
    flrID: '2023-07-01T22:07:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-01T22:07Z',
    peakTime: '2023-07-01T22:23Z',
    endTime: '2023-07-01T22:31Z',
    classType: 'M1.1',
    sourceLocation: 'S22E57',
    activeRegionNum: 13359,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-07-01T23:12:00-CME-001',
      },
    ],
    submissionTime: '2023-07-02T12:20Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25784/-1',
  },
  {
    flrID: '2023-07-02T02:29:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-02T02:29Z',
    peakTime: '2023-07-02T02:35Z',
    endTime: '2023-07-02T02:40Z',
    classType: 'M2.0',
    sourceLocation: 'S22E55',
    activeRegionNum: 13359,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-07-02T03:24:00-CME-001',
      },
    ],
    submissionTime: '2023-07-02T12:19Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25785/-1',
  },
  {
    flrID: '2023-07-02T22:54:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-02T22:54Z',
    peakTime: '2023-07-02T23:14Z',
    endTime: '2023-07-02T23:58Z',
    classType: 'X1.0',
    sourceLocation: 'N13W56',
    activeRegionNum: 13354,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-03T12:57Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25796/-1',
  },
  {
    flrID: '2023-07-03T06:43:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-03T06:43Z',
    peakTime: '2023-07-03T06:53Z',
    endTime: '2023-07-03T06:59Z',
    classType: 'M1.3',
    sourceLocation: 'S12E39',
    activeRegionNum: 13358,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-03T12:14Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25799/-1',
  },
  {
    flrID: '2023-07-03T21:02:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-03T21:02Z',
    peakTime: '2023-07-03T21:12Z',
    endTime: '2023-07-03T21:22Z',
    classType: 'C8.9',
    sourceLocation: 'N23E32',
    activeRegionNum: 13360,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-07-03T22:00:00-CME-001',
      },
    ],
    submissionTime: '2023-07-04T15:26Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25815/-1',
  },
  {
    flrID: '2023-07-04T12:20:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-04T12:20Z',
    peakTime: '2023-07-04T12:35Z',
    endTime: '2023-07-04T12:55Z',
    classType: 'M1.4',
    sourceLocation: 'N16W80',
    activeRegionNum: 13354,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-04T14:38Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25807/-1',
  },
  {
    flrID: '2023-07-05T18:36:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-05T18:36Z',
    peakTime: '2023-07-05T18:58Z',
    endTime: '2023-07-05T19:21Z',
    classType: 'M1.0',
    sourceLocation: 'N16W95',
    activeRegionNum: 13354,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-06T12:46Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25824/-1',
  },
  {
    flrID: '2023-07-06T05:42:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-06T05:42Z',
    peakTime: '2023-07-06T06:01Z',
    endTime: '2023-07-06T07:42Z',
    classType: 'C4.6',
    sourceLocation: 'S15E07',
    activeRegionNum: 13359,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-07-06T09:12:00-CME-001',
      },
    ],
    submissionTime: '2023-07-06T20:49Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25835/-1',
  },
  {
    flrID: '2023-07-06T10:32:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-06T10:32Z',
    peakTime: '2023-07-06T10:49Z',
    endTime: '2023-07-06T11:07Z',
    classType: 'M1.0',
    sourceLocation: 'N15W90',
    activeRegionNum: 13354,
    note: 'This flare occurred beyond the western limb. The Active Region association was estimated based on latitude and approximate location of AR13354 which has rotated off the Earth-facing disk.',
    linkedEvents: null,
    submissionTime: '2023-07-10T11:45Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25825/-1',
  },
  {
    flrID: '2023-07-07T06:17:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-07T06:17Z',
    peakTime: '2023-07-07T06:29Z',
    endTime: '2023-07-07T06:38Z',
    classType: 'M4.0',
    sourceLocation: 'S21W13',
    activeRegionNum: 13359,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-07T11:58Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25837/-1',
  },
  {
    flrID: '2023-07-10T03:29:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-10T03:29Z',
    peakTime: '2023-07-10T03:55Z',
    endTime: '2023-07-10T04:12Z',
    classType: 'M2.3',
    sourceLocation: 'S13W49',
    activeRegionNum: 13366,
    note: 'Source may be AR 3366 or plage region 3358, as the flare is in the vicinity of both.',
    linkedEvents: [
      {
        activityID: '2023-07-10T04:00:00-CME-001',
      },
    ],
    submissionTime: '2023-07-10T12:53Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25869/-1',
  },
  {
    flrID: '2023-07-10T22:06:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-10T22:06Z',
    peakTime: '2023-07-10T22:18Z',
    endTime: '2023-07-10T22:29Z',
    classType: 'M1.4',
    sourceLocation: 'S13W62',
    activeRegionNum: 13358,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-11T12:21Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25887/-1',
  },
  {
    flrID: '2023-07-11T14:19:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-11T14:19Z',
    peakTime: '2023-07-11T14:35Z',
    endTime: '2023-07-11T14:45Z',
    classType: 'M2.0',
    sourceLocation: 'N25E90',
    activeRegionNum: 13379,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-12T11:27Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25891/-1',
  },
  {
    flrID: '2023-07-11T16:02:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-11T16:02Z',
    peakTime: '2023-07-11T16:12Z',
    endTime: '2023-07-11T16:25Z',
    classType: 'M1.1',
    sourceLocation: 'N25E89',
    activeRegionNum: 13372,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-12T11:28Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25895/-1',
  },
  {
    flrID: '2023-07-11T16:25:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-11T16:25Z',
    peakTime: '2023-07-11T16:27Z',
    endTime: '2023-07-11T16:30Z',
    classType: 'M1.0',
    sourceLocation: 'N25E89',
    activeRegionNum: 13372,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-12T11:28Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25896/-1',
  },
  {
    flrID: '2023-07-11T17:51:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-11T17:51Z',
    peakTime: '2023-07-11T18:08Z',
    endTime: '2023-07-11T18:16Z',
    classType: 'M6.8',
    sourceLocation: 'N25E88',
    activeRegionNum: 13372,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-07-11T19:48:00-CME-001',
      },
    ],
    submissionTime: '2023-07-12T11:28Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25898/-1',
  },
  {
    flrID: '2023-07-11T19:20:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-11T19:20Z',
    peakTime: '2023-07-11T19:29Z',
    endTime: '2023-07-11T19:39Z',
    classType: 'M1.0',
    sourceLocation: 'N25E88',
    activeRegionNum: 13372,
    note: 'Simultaneous brightening south of AR3363.',
    linkedEvents: null,
    submissionTime: '2023-07-12T11:28Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25903/-1',
  },
  {
    flrID: '2023-07-11T22:04:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-11T22:04Z',
    peakTime: '2023-07-11T22:15Z',
    endTime: '2023-07-11T22:24Z',
    classType: 'M5.8',
    sourceLocation: 'N26E88',
    activeRegionNum: 13372,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-12T11:28Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25905/-1',
  },
  {
    flrID: '2023-07-11T23:34:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-11T23:34Z',
    peakTime: '2023-07-11T23:37Z',
    endTime: '2023-07-11T23:45Z',
    classType: 'M1.2',
    sourceLocation: 'S19W59',
    activeRegionNum: 13368,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-12T11:38Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25909/-1',
  },
  {
    flrID: '2023-07-12T00:21:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-12T00:21Z',
    peakTime: '2023-07-12T00:31Z',
    endTime: '2023-07-12T00:40Z',
    classType: 'M1.4',
    sourceLocation: 'S11W67',
    activeRegionNum: 13366,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-12T11:41Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25910/-1',
  },
  {
    flrID: '2023-07-12T04:31:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-12T04:31Z',
    peakTime: '2023-07-12T04:45Z',
    endTime: '2023-07-12T04:58Z',
    classType: 'M1.3',
    sourceLocation: 'N25E88',
    activeRegionNum: 13372,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-12T11:47Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25911/-1',
  },
  {
    flrID: '2023-07-12T05:10:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-12T05:10Z',
    peakTime: '2023-07-12T05:14Z',
    endTime: '2023-07-12T05:23Z',
    classType: 'M1.3',
    sourceLocation: 'N25W54',
    activeRegionNum: 13361,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-12T11:49Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25912/-1',
  },
  {
    flrID: '2023-07-12T08:49:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-12T08:49Z',
    peakTime: '2023-07-12T08:55Z',
    endTime: '2023-07-12T09:00Z',
    classType: 'M6.9',
    sourceLocation: 'N26E86',
    activeRegionNum: 13372,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-12T11:26Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25907/-1',
  },
  {
    flrID: '2023-07-13T18:55:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-13T18:55Z',
    peakTime: '2023-07-13T19:20Z',
    endTime: '2023-07-13T19:36Z',
    classType: 'M2.1',
    sourceLocation: 'N22E60',
    activeRegionNum: 13372,
    note: 'LOCATION: Simultaneous flaring on both the Eastern and Western portions of the solar disk, as seen in SDO AIA 131 imagery. The brightest (in terms of visual appearance) source is AR 3372 (N22E60), but the two additional simultaneous flares occur on the Western limb: AR3361 (N25W75) with associated ejecta, and AR3368 (S17W88) which flares just beyond the limb.',
    linkedEvents: null,
    submissionTime: '2023-07-13T19:53Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25951/-1',
  },
  {
    flrID: '2023-07-14T09:22:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-14T09:22Z',
    peakTime: '2023-07-14T09:36Z',
    endTime: '2023-07-14T09:49Z',
    classType: 'M1.0',
    sourceLocation: 'S23W25',
    activeRegionNum: 13363,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-07-14T10:18:00-CME-001',
      },
    ],
    submissionTime: '2023-07-14T10:55Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25953/-1',
  },
  {
    flrID: '2023-07-14T18:27:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-14T18:27Z',
    peakTime: '2023-07-14T18:44Z',
    endTime: '2023-07-14T19:02Z',
    classType: 'C8.8',
    sourceLocation: 'S18E14',
    activeRegionNum: 13370,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-07-14T19:10:00-CME-001',
      },
    ],
    submissionTime: '2023-07-17T13:09Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25978/-1',
  },
  {
    flrID: '2023-07-15T07:21:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-15T07:21Z',
    peakTime: '2023-07-15T07:41Z',
    endTime: '2023-07-15T07:56Z',
    classType: 'M2.9',
    sourceLocation: 'S25W40',
    activeRegionNum: 13363,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-07-15T07:51:00-CME-001',
      },
    ],
    submissionTime: '2023-07-15T17:50Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25975/-1',
  },
  {
    flrID: '2023-07-15T09:43:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-15T09:43Z',
    peakTime: '2023-07-15T09:53Z',
    endTime: '2023-07-15T09:57Z',
    classType: 'M1.0',
    sourceLocation: 'N21E42',
    activeRegionNum: 13372,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-15T20:27Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25994/-1',
  },
  {
    flrID: '2023-07-15T10:05:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-15T10:05Z',
    peakTime: '2023-07-15T10:10Z',
    endTime: '2023-07-15T10:14Z',
    classType: 'M2.2',
    sourceLocation: 'N21E41',
    activeRegionNum: 13372,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-15T20:29Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25995/-1',
  },
  {
    flrID: '2023-07-15T19:50:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-15T19:50Z',
    peakTime: '2023-07-15T20:01Z',
    endTime: '2023-07-15T20:05Z',
    classType: 'C8.8',
    sourceLocation: 'S22W45',
    activeRegionNum: 13363,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-07-16T06:35:00-SEP-001',
      },
    ],
    submissionTime: '2023-07-18T20:36Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26089/-1',
  },
  {
    flrID: '2023-07-16T08:16:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-16T08:16Z',
    peakTime: '2023-07-16T08:26Z',
    endTime: '2023-07-16T08:30Z',
    classType: 'M1.0',
    sourceLocation: 'N20E30',
    activeRegionNum: 13372,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-16T12:30Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25998/-1',
  },
  {
    flrID: '2023-07-16T08:31:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-16T08:31Z',
    peakTime: '2023-07-16T08:41Z',
    endTime: '2023-07-16T08:45Z',
    classType: 'C4.7',
    sourceLocation: 'S25W50',
    activeRegionNum: 13363,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-07-16T09:08:00-CME-001',
      },
    ],
    submissionTime: '2023-07-17T17:57Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/25999/-1',
  },
  {
    flrID: '2023-07-16T14:57:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-16T14:57Z',
    peakTime: '2023-07-16T15:08Z',
    endTime: '2023-07-16T15:12Z',
    classType: 'M1.7',
    sourceLocation: 'N20E25',
    activeRegionNum: 13372,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-16T16:01Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26002/-1',
  },
  {
    flrID: '2023-07-16T17:36:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-16T17:36Z',
    peakTime: '2023-07-16T17:46Z',
    endTime: '2023-07-16T18:59Z',
    classType: 'M4.0',
    sourceLocation: 'S25W60',
    activeRegionNum: 13363,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-07-16T17:53:00-CME-001',
      },
      {
        activityID: '2023-07-16T18:49:00-SEP-001',
      },
      {
        activityID: '2023-07-16T18:49:00-SEP-002',
      },
    ],
    submissionTime: '2023-07-16T19:53Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26008/-1',
  },
  {
    flrID: '2023-07-17T22:41:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-17T22:41Z',
    peakTime: '2023-07-17T22:54Z',
    endTime: '2023-07-17T23:06Z',
    classType: 'M2.7',
    sourceLocation: 'S25W72',
    activeRegionNum: 13363,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-18T11:53Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26076/-1',
  },
  {
    flrID: '2023-07-17T23:18:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-17T23:18Z',
    peakTime: '2023-07-17T23:33Z',
    endTime: '2023-07-17T23:37Z',
    classType: 'M5.0',
    sourceLocation: 'S25W72',
    activeRegionNum: 13363,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-07-18T01:00:00-SEP-002',
      },
      {
        activityID: '2023-07-18T01:00:00-SEP-001',
      },
      {
        activityID: '2023-07-17T23:36:00-CME-001',
      },
      {
        activityID: '2023-07-18T00:53:00-SEP-001',
      },
      {
        activityID: '2023-07-18T01:06:00-SEP-001',
      },
      {
        activityID: '2023-07-18T01:06:00-SEP-002',
      },
      {
        activityID: '2023-07-18T01:09:00-SEP-001',
      },
      {
        activityID: '2023-07-18T01:12:00-SEP-001',
      },
      {
        activityID: '2023-07-18T01:15:00-SEP-001',
      },
    ],
    submissionTime: '2023-07-18T00:09Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26048/-1',
  },
  {
    flrID: '2023-07-17T23:37:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-17T23:37Z',
    peakTime: '2023-07-18T00:06Z',
    endTime: '2023-07-18T00:23Z',
    classType: 'M5.7',
    sourceLocation: 'S25W72',
    activeRegionNum: 13363,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-07-17T23:36:00-CME-001',
      },
      {
        activityID: '2023-07-18T01:00:00-SEP-002',
      },
      {
        activityID: '2023-07-18T01:00:00-SEP-001',
      },
      {
        activityID: '2023-07-18T00:53:00-SEP-001',
      },
      {
        activityID: '2023-07-18T01:06:00-SEP-001',
      },
      {
        activityID: '2023-07-18T01:06:00-SEP-002',
      },
      {
        activityID: '2023-07-18T01:09:00-SEP-001',
      },
      {
        activityID: '2023-07-18T01:12:00-SEP-001',
      },
      {
        activityID: '2023-07-18T01:15:00-SEP-001',
      },
    ],
    submissionTime: '2023-07-18T00:43Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26050/-1',
  },
  {
    flrID: '2023-07-18T06:45:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-18T06:45Z',
    peakTime: '2023-07-18T06:56Z',
    endTime: '2023-07-18T07:02Z',
    classType: 'M1.5',
    sourceLocation: 'N12E90',
    activeRegionNum: 13379,
    note: 'At the time of this flare the Active Region was on or just beyond the eastern limb and was unnumbered. This entry has been updated to include newly numbered Active Region 13379, which was most likely the region responsible for this flare.',
    linkedEvents: null,
    submissionTime: '2023-07-20T14:47Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26079/-1',
  },
  {
    flrID: '2023-07-18T19:32:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-18T19:32Z',
    peakTime: '2023-07-18T19:48Z',
    endTime: '2023-07-18T20:00Z',
    classType: 'M1.3',
    sourceLocation: 'N27E35',
    activeRegionNum: 13376,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-07-18T20:12:00-CME-001',
      },
    ],
    submissionTime: '2023-07-18T20:07Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26087/-1',
  },
  {
    flrID: '2023-07-18T20:00:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-18T20:00Z',
    peakTime: '2023-07-18T20:05Z',
    endTime: '2023-07-18T20:11Z',
    classType: 'M1.4',
    sourceLocation: 'N27E31',
    activeRegionNum: 13376,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-07-18T20:12:00-CME-001',
      },
    ],
    submissionTime: '2023-07-18T20:16Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26088/-1',
  },
  {
    flrID: '2023-07-18T20:16:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-18T20:16Z',
    peakTime: '2023-07-18T20:27Z',
    endTime: '2023-07-18T20:35Z',
    classType: 'M2.1',
    sourceLocation: 'S21W87',
    activeRegionNum: 13363,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-19T01:49Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26090/-1',
  },
  {
    flrID: '2023-07-19T10:49:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-19T10:49Z',
    peakTime: '2023-07-19T10:57Z',
    endTime: '2023-07-19T11:02Z',
    classType: 'M1.4',
    sourceLocation: 'S25W90',
    activeRegionNum: 13363,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-19T18:42Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26107/-1',
  },
  {
    flrID: '2023-07-19T17:04:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-19T17:04Z',
    peakTime: '2023-07-19T17:25Z',
    endTime: '2023-07-19T17:43Z',
    classType: 'M3.8',
    sourceLocation: 'S19W90',
    activeRegionNum: 13363,
    note: 'Active Region 13363 has rotated off the Earth-facing disk so the longitude is likely higher than 90 degrees.',
    linkedEvents: [
      {
        activityID: '2023-07-19T17:36:00-CME-001',
      },
    ],
    submissionTime: '2023-07-19T18:51Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26108/-1',
  },
  {
    flrID: '2023-07-22T03:12:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-22T03:12Z',
    peakTime: '2023-07-22T03:37Z',
    endTime: '2023-07-22T03:55Z',
    classType: 'M3.1',
    sourceLocation: 'N25W50',
    activeRegionNum: 13372,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-22T12:20Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26132/-1',
  },
  {
    flrID: '2023-07-22T04:12:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-22T04:12Z',
    peakTime: '2023-07-22T04:16Z',
    endTime: '2023-07-22T04:24Z',
    classType: 'M1.0',
    sourceLocation: 'N07W29',
    activeRegionNum: 13373,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-22T19:47Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26133/-1',
  },
  {
    flrID: '2023-07-23T14:47:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-23T14:47Z',
    peakTime: '2023-07-23T14:57Z',
    endTime: '2023-07-23T15:15Z',
    classType: 'C5.2',
    sourceLocation: 'N28W25',
    activeRegionNum: 13376,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-07-23T15:05:00-CME-001',
      },
    ],
    submissionTime: '2023-07-23T17:53Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26153/-1',
  },
  {
    flrID: '2023-07-25T01:36:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-25T01:36Z',
    peakTime: '2023-07-25T02:03Z',
    endTime: '2023-07-25T02:24Z',
    classType: 'M1.5',
    sourceLocation: 'N25W52',
    activeRegionNum: 13376,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-25T11:38Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26182/-1',
  },
  {
    flrID: '2023-07-25T21:08:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-25T21:08Z',
    peakTime: '2023-07-25T21:16Z',
    endTime: '2023-07-25T21:24Z',
    classType: 'M1.6',
    sourceLocation: 'S11E41',
    activeRegionNum: 13380,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-26T12:13Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26191/-1',
  },
  {
    flrID: '2023-07-26T04:21:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-26T04:21Z',
    peakTime: '2023-07-26T04:28Z',
    endTime: '2023-07-26T04:33Z',
    classType: 'M1.2',
    sourceLocation: 'N23W68',
    activeRegionNum: 13376,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-26T12:15Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26192/-1',
  },
  {
    flrID: '2023-07-26T10:17:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-26T10:17Z',
    peakTime: '2023-07-26T10:37Z',
    endTime: '2023-07-26T10:48Z',
    classType: 'M4.6',
    sourceLocation: 'N23W74',
    activeRegionNum: 13376,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-26T12:19Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26193/-1',
  },
  {
    flrID: '2023-07-26T15:50:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-26T15:50Z',
    peakTime: '2023-07-26T15:59Z',
    endTime: '2023-07-26T16:07Z',
    classType: 'M2.0',
    sourceLocation: 'N23W77',
    activeRegionNum: 13376,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-26T19:35Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26199/-1',
  },
  {
    flrID: '2023-07-26T16:10:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-26T16:10Z',
    peakTime: '2023-07-26T16:13Z',
    endTime: '2023-07-26T16:17Z',
    classType: 'M1.1',
    sourceLocation: 'N23W77',
    activeRegionNum: 13376,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-26T19:35Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26200/-1',
  },
  {
    flrID: '2023-07-27T09:44:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-27T09:44Z',
    peakTime: '2023-07-27T09:51Z',
    endTime: '2023-07-27T09:58Z',
    classType: 'M1.9',
    sourceLocation: 'N23W90',
    activeRegionNum: 13376,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-27T12:40Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26205/-1',
  },
  {
    flrID: '2023-07-27T22:04:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-27T22:04Z',
    peakTime: '2023-07-27T22:34Z',
    endTime: '2023-07-27T23:05Z',
    classType: 'M1.7',
    sourceLocation: 'S25E75',
    activeRegionNum: 13388,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-07-27T23:24:00-CME-001',
      },
    ],
    submissionTime: '2023-07-28T12:27Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26207/-1',
  },
  {
    flrID: '2023-07-28T15:39:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-28T15:39Z',
    peakTime: '2023-07-28T15:58Z',
    endTime: '2023-07-28T16:13Z',
    classType: 'M4.1',
    sourceLocation: 'N25W99',
    activeRegionNum: 13376,
    note: 'Associated with a beautiful bright filament eruption seen rising right behind the NW limb in AIA 131/304/193 at ~2023-07-28T15:44Z. This is an occulted flare, likely from AR 13376 which had rotated behind the limb to N25W99. Associated with a type II radio burst.',
    linkedEvents: [
      {
        activityID: '2023-07-28T15:53:00-CME-001',
      },
      {
        activityID: '2023-07-28T18:12:00-SEP-001',
      },
      {
        activityID: '2023-07-28T19:05:00-SEP-001',
      },
      {
        activityID: '2023-07-28T19:19:00-SEP-001',
      },
      {
        activityID: '2023-07-28T19:23:00-SEP-001',
      },
      {
        activityID: '2023-07-28T23:50:00-SEP-001',
      },
      {
        activityID: '2023-07-29T00:53:00-SEP-001',
      },
    ],
    submissionTime: '2023-08-01T18:59Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26212/-1',
  },
  {
    flrID: '2023-07-29T06:55:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-29T06:55Z',
    peakTime: '2023-07-29T07:34Z',
    endTime: '2023-07-29T08:12Z',
    classType: 'C6.7',
    sourceLocation: 'N15E88',
    activeRegionNum: null,
    note: 'Flare magnitude may be impacted by foreshortening due to location of flare on the east limb. Due to a data gap from 2023-07-29T06:46Z-07:51Z, most of this flare is not visible in SDO AIA imagery.',
    linkedEvents: [
      {
        activityID: '2023-07-29T07:53:00-CME-001',
      },
    ],
    submissionTime: '2023-07-29T19:06Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26240/-1',
  },
  {
    flrID: '2023-07-29T16:11:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-29T16:11Z',
    peakTime: '2023-07-29T16:24Z',
    endTime: '2023-07-29T16:37Z',
    classType: 'M1.4',
    sourceLocation: 'S10W10',
    activeRegionNum: 13380,
    note: 'Eruption best seen as dimming in SDO AIA 193 was observed following this flare.',
    linkedEvents: null,
    submissionTime: '2023-07-29T19:52Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26248/-1',
  },
  {
    flrID: '2023-07-30T08:01:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-30T08:01Z',
    peakTime: '2023-07-30T08:14Z',
    endTime: '2023-07-30T08:18Z',
    classType: 'M1.8',
    sourceLocation: 'S18E57',
    activeRegionNum: 13390,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-31T12:13Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26265/-1',
  },
  {
    flrID: '2023-07-30T08:18:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-30T08:18Z',
    peakTime: '2023-07-30T08:22Z',
    endTime: '2023-07-30T08:26Z',
    classType: 'M1.8',
    sourceLocation: 'S18E57',
    activeRegionNum: 13390,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-30T16:00Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26257/-1',
  },
  {
    flrID: '2023-07-31T08:42:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-07-31T08:42Z',
    peakTime: '2023-07-31T09:00Z',
    endTime: '2023-07-31T09:13Z',
    classType: 'M1.6',
    sourceLocation: 'S20E43',
    activeRegionNum: 13390,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-07-31T12:16Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26266/-1',
  },
  {
    flrID: '2023-08-01T01:38:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-01T01:38Z',
    peakTime: '2023-08-01T01:56Z',
    endTime: '2023-08-01T01:58Z',
    classType: 'M1.0',
    sourceLocation: 'S10W40',
    activeRegionNum: 13380,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-08-01T02:24Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26269/-1',
  },
  {
    flrID: '2023-08-01T01:58:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-01T01:58Z',
    peakTime: '2023-08-01T02:03Z',
    endTime: '2023-08-01T02:07Z',
    classType: 'M1.2',
    sourceLocation: 'S10W40',
    activeRegionNum: 13380,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-08-01T02:26Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26270/-1',
  },
  {
    flrID: '2023-08-01T04:27:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-01T04:27Z',
    peakTime: '2023-08-01T04:47Z',
    endTime: '2023-08-01T05:07Z',
    classType: 'M2.2',
    sourceLocation: 'S10W45',
    activeRegionNum: 13380,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-08-01T12:26Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26271/-1',
  },
  {
    flrID: '2023-08-01T05:30:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-01T05:30Z',
    peakTime: '2023-08-01T05:37Z',
    endTime: '2023-08-01T05:43Z',
    classType: 'M1.3',
    sourceLocation: 'S10W45',
    activeRegionNum: 13380,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-08-01T12:28Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26272/-1',
  },
  {
    flrID: '2023-08-01T06:28:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-01T06:28Z',
    peakTime: '2023-08-01T06:57Z',
    endTime: '2023-08-01T07:19Z',
    classType: 'M3.6',
    sourceLocation: 'S10W47',
    activeRegionNum: 13380,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-08-01T12:37Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26275/-1',
  },
  {
    flrID: '2023-08-01T09:03:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-01T09:03Z',
    peakTime: '2023-08-01T09:09Z',
    endTime: '2023-08-01T09:16Z',
    classType: 'M1.5',
    sourceLocation: 'S08W42',
    activeRegionNum: 13380,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-08-01T12:41Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26276/-1',
  },
  {
    flrID: '2023-08-01T14:03:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-01T14:03Z',
    peakTime: '2023-08-01T14:09Z',
    endTime: '2023-08-01T14:27Z',
    classType: 'M1.4',
    sourceLocation: 'S10W47',
    activeRegionNum: 13380,
    note: 'Peak occurs at end of data gap due to eclipse of GOES spacecraft.',
    linkedEvents: null,
    submissionTime: '2023-08-01T18:38Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26280/-1',
  },
  {
    flrID: '2023-08-01T19:48:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-01T19:48Z',
    peakTime: '2023-08-01T20:08Z',
    endTime: '2023-08-01T20:43Z',
    classType: 'C5.2',
    sourceLocation: 'N17E60',
    activeRegionNum: null,
    note: 'Currently unnumbered region.',
    linkedEvents: [
      {
        activityID: '2023-08-01T20:36:00-CME-001',
      },
    ],
    submissionTime: '2023-08-02T18:06Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26306/-1',
  },
  {
    flrID: '2023-08-01T21:39:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-01T21:39Z',
    peakTime: '2023-08-01T21:51Z',
    endTime: '2023-08-01T21:58Z',
    classType: 'M1.0',
    sourceLocation: 'S10W51',
    activeRegionNum: 13380,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-08-02T12:21Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26291/-1',
  },
  {
    flrID: '2023-08-02T08:03:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-02T08:03Z',
    peakTime: '2023-08-02T08:12Z',
    endTime: '2023-08-02T08:21Z',
    classType: 'M1.3',
    sourceLocation: 'N11W22',
    activeRegionNum: 13386,
    note: 'There was also a simultaneous flare from Active Region 3380 at the time as seen in SDO AIA imagery.',
    linkedEvents: null,
    submissionTime: '2023-08-08T16:06Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26292/-1',
  },
  {
    flrID: '2023-08-02T10:44:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-02T10:44Z',
    peakTime: '2023-08-02T10:50Z',
    endTime: '2023-08-02T10:54Z',
    classType: 'M1.2',
    sourceLocation: 'S10W61',
    activeRegionNum: 13380,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-08-02T12:23Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26293/-1',
  },
  {
    flrID: '2023-08-02T14:46:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-02T14:46Z',
    peakTime: '2023-08-02T14:52Z',
    endTime: '2023-08-02T14:56Z',
    classType: 'M1.7',
    sourceLocation: 'S10W63',
    activeRegionNum: 13380,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-08-08T15:49Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26297/-1',
  },
  {
    flrID: '2023-08-02T16:13:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-02T16:13Z',
    peakTime: '2023-08-02T16:22Z',
    endTime: '2023-08-02T16:26Z',
    classType: 'M1.3',
    sourceLocation: 'S10W63',
    activeRegionNum: 13380,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-08-02T18:28Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26302/-1',
  },
  {
    flrID: '2023-08-02T19:09:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-02T19:09Z',
    peakTime: '2023-08-02T19:14Z',
    endTime: '2023-08-02T19:21Z',
    classType: 'M1.1',
    sourceLocation: 'S10W66',
    activeRegionNum: 13380,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-08-02T20:18Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26309/-1',
  },
  {
    flrID: '2023-08-03T11:47:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-03T11:47Z',
    peakTime: '2023-08-03T11:55Z',
    endTime: '2023-08-03T11:59Z',
    classType: 'M2.0',
    sourceLocation: 'S10W72',
    activeRegionNum: 13380,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-08-03T12:05Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26313/-1',
  },
  {
    flrID: '2023-08-04T03:38:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-04T03:38Z',
    peakTime: '2023-08-04T04:24Z',
    endTime: '2023-08-04T05:11Z',
    classType: 'M1.9',
    sourceLocation: 'N12W47',
    activeRegionNum: 13386,
    note: 'Long-duration flare.',
    linkedEvents: [
      {
        activityID: '2023-08-04T04:17:00-CME-001',
      },
      {
        activityID: '2023-08-04T04:49:00-CME-001',
      },
    ],
    submissionTime: '2023-08-04T12:14Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26322/-1',
  },
  {
    flrID: '2023-08-05T06:18:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-05T06:18Z',
    peakTime: '2023-08-05T07:22Z',
    endTime: '2023-08-05T09:06Z',
    classType: 'M1.6',
    sourceLocation: 'N11W65',
    activeRegionNum: 13386,
    note: 'Long-duration flare.',
    linkedEvents: [
      {
        activityID: '2023-08-05T07:12:00-CME-001',
      },
      {
        activityID: '2023-08-05T10:00:00-SEP-001',
      },
      {
        activityID: '2023-08-05T10:19:00-SEP-001',
      },
      {
        activityID: '2023-08-05T10:47:00-SEP-001',
      },
      {
        activityID: '2023-08-05T10:59:00-SEP-001',
      },
      {
        activityID: '2023-08-05T11:15:00-SEP-001',
      },
      {
        activityID: '2023-08-05T12:33:00-SEP-001',
      },
    ],
    submissionTime: '2023-08-08T16:25Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26346/-1',
  },
  {
    flrID: '2023-08-05T09:23:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-05T09:23Z',
    peakTime: '2023-08-05T09:36Z',
    endTime: '2023-08-05T09:50Z',
    classType: 'M2.1',
    sourceLocation: 'S11W98',
    activeRegionNum: 13380,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-08-05T12:34Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26345/-1',
  },
  {
    flrID: '2023-08-05T21:45:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-05T21:45Z',
    peakTime: '2023-08-05T22:21Z',
    endTime: '2023-08-05T22:44Z',
    classType: 'X1.6',
    sourceLocation: 'N11W74',
    activeRegionNum: 13386,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-08-05T10:00:00-SEP-001',
      },
      {
        activityID: '2023-08-05T10:19:00-SEP-001',
      },
      {
        activityID: '2023-08-05T10:47:00-SEP-001',
      },
      {
        activityID: '2023-08-05T11:15:00-SEP-001',
      },
      {
        activityID: '2023-08-05T22:24:00-CME-001',
      },
    ],
    submissionTime: '2023-08-05T23:10Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26360/-1',
  },
  {
    flrID: '2023-08-06T18:20:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-06T18:20Z',
    peakTime: '2023-08-06T18:40Z',
    endTime: '2023-08-06T18:54Z',
    classType: 'M5.5',
    sourceLocation: 'N11W89',
    activeRegionNum: 13386,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-08-06T18:48:00-CME-001',
      },
    ],
    submissionTime: '2023-08-07T12:40Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26372/-1',
  },
  {
    flrID: '2023-08-07T04:29:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-07T04:29Z',
    peakTime: '2023-08-07T04:41Z',
    endTime: '2023-08-07T04:51Z',
    classType: 'M2.4',
    sourceLocation: 'N10W93',
    activeRegionNum: 13386,
    note: 'Active Region 3386 rotated beyond the west limb of the Earth-facing disk early on 2023-08-07.',
    linkedEvents: [
      {
        activityID: '2023-08-07T05:00:00-CME-001',
      },
    ],
    submissionTime: '2023-08-07T11:46Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26380/-1',
  },
  {
    flrID: '2023-08-07T15:30:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-07T15:30Z',
    peakTime: '2023-08-07T16:11Z',
    endTime: '2023-08-07T16:24Z',
    classType: 'M1.0',
    sourceLocation: 'N16W81',
    activeRegionNum: 13387,
    note: 'Doubled peaked M1.0 flare from AR 3387.',
    linkedEvents: [
      {
        activityID: '2023-08-07T16:09:00-CME-001',
      },
    ],
    submissionTime: '2023-08-08T14:36Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26387/-1',
  },
  {
    flrID: '2023-08-07T16:24:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-07T16:24Z',
    peakTime: '2023-08-07T16:26Z',
    endTime: '2023-08-07T16:36Z',
    classType: 'M1.0',
    sourceLocation: 'N14W87',
    activeRegionNum: 13387,
    note: 'Double peaked flare likely from AR 3387 as seen in SDO AIA 131 imagery.',
    linkedEvents: null,
    submissionTime: '2023-08-07T20:10Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26388/-1',
  },
  {
    flrID: '2023-08-07T19:37:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-07T19:37Z',
    peakTime: '2023-08-07T19:51Z',
    endTime: '2023-08-07T19:58Z',
    classType: 'M1.4',
    sourceLocation: 'N19W75',
    activeRegionNum: 13387,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-08-07T20:09Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26402/-1',
  },
  {
    flrID: '2023-08-07T20:30:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-07T20:30Z',
    peakTime: '2023-08-07T20:46Z',
    endTime: '2023-08-07T21:18Z',
    classType: 'X1.5',
    sourceLocation: 'N11W90',
    activeRegionNum: 13386,
    note: 'Simultaneous flaring from AR13387. Main flaring AR is beyond limb.',
    linkedEvents: [
      {
        activityID: '2023-08-07T20:48:00-CME-001',
      },
      {
        activityID: '2023-08-07T22:09:00-SEP-001',
      },
      {
        activityID: '2023-08-07T22:19:00-SEP-001',
      },
      {
        activityID: '2023-08-08T01:00:00-SEP-001',
      },
      {
        activityID: '2023-08-08T01:48:00-SEP-001',
      },
      {
        activityID: '2023-08-08T01:59:00-SEP-001',
      },
      {
        activityID: '2023-08-08T04:26:00-SEP-001',
      },
    ],
    submissionTime: '2023-08-08T14:37Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26403/-1',
  },
  {
    flrID: '2023-08-08T09:20:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-08T09:20Z',
    peakTime: '2023-08-08T09:31Z',
    endTime: '2023-08-08T09:41Z',
    classType: 'M3.6',
    sourceLocation: 'N18W78',
    activeRegionNum: 13387,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-08-08T12:46Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26423/-1',
  },
  {
    flrID: '2023-08-10T02:26:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-10T02:26Z',
    peakTime: '2023-08-10T02:42Z',
    endTime: '2023-08-10T02:59Z',
    classType: 'C5.4',
    sourceLocation: 'S22W80',
    activeRegionNum: 13398,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-08-10T02:48:00-CME-001',
      },
    ],
    submissionTime: '2023-08-10T13:29Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26457/-1',
  },
  {
    flrID: '2023-08-14T20:30:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-14T20:30Z',
    peakTime: '2023-08-14T21:10Z',
    endTime: '2023-08-14T21:38Z',
    classType: 'C8.9',
    sourceLocation: 'N11E88',
    activeRegionNum: 13405,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-08-14T20:48:00-CME-001',
      },
    ],
    submissionTime: '2023-08-15T19:00Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26515/-1',
  },
  {
    flrID: '2023-08-17T02:19:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-17T02:19Z',
    peakTime: '2023-08-17T02:46Z',
    endTime: '2023-08-17T03:32Z',
    classType: 'C3.6',
    sourceLocation: 'S24W110',
    activeRegionNum: 13394,
    note: 'Source is believed to be AR 3394 which rotated off the Earth-facing disk on 2023-08-15. The exact source location is uncertain because it is beyond the west limb, AR 3394 is likely situated at this approximate coordinates. A type II radio burst and CME were associated with this event.',
    linkedEvents: [
      {
        activityID: '2023-08-17T02:48:00-CME-001',
      },
    ],
    submissionTime: '2023-08-17T12:55Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26531/-1',
  },
  {
    flrID: '2023-08-17T12:14:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-17T12:14Z',
    peakTime: '2023-08-17T12:40Z',
    endTime: '2023-08-17T13:06Z',
    classType: 'C5.1',
    sourceLocation: 'N19W80',
    activeRegionNum: 13397,
    note: 'This flare is associated with a type II radio burst and CME.',
    linkedEvents: [
      {
        activityID: '2023-08-17T12:48:00-CME-001',
      },
    ],
    submissionTime: '2023-08-17T16:10Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26538/-1',
  },
  {
    flrID: '2023-08-17T17:16:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-17T17:16Z',
    peakTime: '2023-08-17T17:29Z',
    endTime: '2023-08-17T17:46Z',
    classType: 'C2.2',
    sourceLocation: 'N16W80',
    activeRegionNum: 13397,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-08-17T17:36:00-CME-001',
      },
    ],
    submissionTime: '2023-08-18T15:36Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26549/-1',
  },
  {
    flrID: '2023-08-18T10:30:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-18T10:30Z',
    peakTime: '2023-08-18T10:48Z',
    endTime: '2023-08-18T11:08Z',
    classType: 'C1.7',
    sourceLocation: 'N20W36',
    activeRegionNum: 13409,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-08-18T11:36:00-CME-001',
      },
    ],
    submissionTime: '2023-08-18T19:27Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26553/-1',
  },
  {
    flrID: '2023-08-18T19:09:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-18T19:09Z',
    peakTime: '2023-08-18T19:30Z',
    endTime: '2023-08-18T19:49Z',
    classType: 'C3.7',
    sourceLocation: 'N21W41',
    activeRegionNum: 13409,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-08-18T19:48:00-CME-001',
      },
    ],
    submissionTime: '2023-08-19T16:50Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26561/-1',
  },
  {
    flrID: '2023-08-18T21:17:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-18T21:17Z',
    peakTime: '2023-08-18T21:35Z',
    endTime: '2023-08-18T21:58Z',
    classType: 'C3.0',
    sourceLocation: 'N21W42',
    activeRegionNum: 13409,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-08-18T22:00:00-CME-001',
      },
    ],
    submissionTime: '2023-08-19T16:51Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26562/-1',
  },
  {
    flrID: '2023-08-21T12:18:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-21T12:18Z',
    peakTime: '2023-08-21T12:38Z',
    endTime: '2023-08-21T12:53Z',
    classType: 'C3.1',
    sourceLocation: 'N27W78',
    activeRegionNum: 13403,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-08-21T13:23:00-CME-001',
      },
    ],
    submissionTime: '2023-08-21T20:00Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26584/-1',
  },
  {
    flrID: '2023-08-21T23:47:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-21T23:47Z',
    peakTime: '2023-08-22T00:00Z',
    endTime: '2023-08-22T00:07Z',
    classType: 'C5.7',
    sourceLocation: 'S09E90',
    activeRegionNum: 13415,
    note: 'Source location of the flare is approximate, as the active region was on/just behind the limb.',
    linkedEvents: [
      {
        activityID: '2023-08-22T00:35:00-CME-001',
      },
    ],
    submissionTime: '2023-08-23T14:59Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26600/-1',
  },
  {
    flrID: '2023-08-22T22:35:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-22T22:35Z',
    peakTime: '2023-08-22T23:04Z',
    endTime: '2023-08-22T23:38Z',
    classType: 'M1.1',
    sourceLocation: 'N09W28',
    activeRegionNum: 13405,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-08-22T23:29:00-CME-001',
      },
    ],
    submissionTime: '2023-08-22T23:49Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26595/-1',
  },
  {
    flrID: '2023-08-24T19:23:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-24T19:23Z',
    peakTime: '2023-08-24T19:31Z',
    endTime: '2023-08-24T19:39Z',
    classType: 'C1.5',
    sourceLocation: 'N26W90',
    activeRegionNum: null,
    note: 'Flare beyond NW limb, likely associated with AR13403 (~N26W112).',
    linkedEvents: [
      {
        activityID: '2023-08-24T20:00:00-CME-001',
      },
    ],
    submissionTime: '2023-08-25T18:59Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26633/-1',
  },
  {
    flrID: '2023-08-24T19:39:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-24T19:39Z',
    peakTime: '2023-08-24T20:41Z',
    endTime: '2023-08-24T20:45Z',
    classType: 'C3.0',
    sourceLocation: 'N26W90',
    activeRegionNum: null,
    note: 'Flare beyond NW limb, likely associated with AR13403 (~N26W112). This flare entry includes multiple minor fluctuations (<.10) in the x-ray flux.',
    linkedEvents: [
      {
        activityID: '2023-08-24T20:00:00-CME-001',
      },
    ],
    submissionTime: '2023-08-25T19:07Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26635/-1',
  },
  {
    flrID: '2023-08-25T00:56:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-25T00:56Z',
    peakTime: '2023-08-25T01:09Z',
    endTime: '2023-08-25T01:26Z',
    classType: 'M1.4',
    sourceLocation: 'S12E50',
    activeRegionNum: 13415,
    note: 'Flare observed on the SE portion of the Earth-facing disk.',
    linkedEvents: [
      {
        activityID: '2023-08-25T02:48:00-CME-001',
      },
    ],
    submissionTime: '2023-08-30T20:46Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26619/-1',
  },
  {
    flrID: '2023-08-25T11:04:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-25T11:04Z',
    peakTime: '2023-08-25T11:07Z',
    endTime: '2023-08-25T11:09Z',
    classType: 'B7.6',
    sourceLocation: 'N09W67',
    activeRegionNum: 13405,
    note: 'Small flare on the NW portion of the disk best seen in SDO AIA 131/304, associated with some filament ejecta seen in SDO AIA 304.',
    linkedEvents: [
      {
        activityID: '2023-08-25T11:12:00-CME-001',
      },
    ],
    submissionTime: '2023-08-25T19:03Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26634/-1',
  },
  {
    flrID: '2023-08-25T11:11:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-25T11:11Z',
    peakTime: '2023-08-25T11:17Z',
    endTime: '2023-08-25T11:24Z',
    classType: 'C1.2',
    sourceLocation: 'N09W67',
    activeRegionNum: 13405,
    note: 'Small flare on the NW portion of the disk best seen in SDO AIA 131/304, associated with some filament ejecta seen in SDO AIA 304.',
    linkedEvents: [
      {
        activityID: '2023-08-25T11:48:00-CME-001',
      },
    ],
    submissionTime: '2023-08-25T18:58Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26632/-1',
  },
  {
    flrID: '2023-08-26T12:44:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-26T12:44Z',
    peakTime: '2023-08-26T13:02Z',
    endTime: '2023-08-26T13:26Z',
    classType: 'C1.9',
    sourceLocation: 'N10W73',
    activeRegionNum: 13405,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-08-26T13:23:00-CME-001',
      },
    ],
    submissionTime: '2023-08-26T19:03Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26640/-1',
  },
  {
    flrID: '2023-08-26T22:05:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-26T22:05Z',
    peakTime: '2023-08-26T22:50Z',
    endTime: '2023-08-26T23:42Z',
    classType: 'M1.1',
    sourceLocation: 'S05E90',
    activeRegionNum: 13417,
    note: 'At the time of the flare, the associated Active Region was on the east limb and therefore unnumbered. This region has since been numbered as Active Region 13417.',
    linkedEvents: [
      {
        activityID: '2023-08-26T22:36:00-CME-001',
      },
    ],
    submissionTime: '2023-08-29T19:05Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26644/-1',
  },
  {
    flrID: '2023-08-31T04:51:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-08-31T04:51Z',
    peakTime: '2023-08-31T06:13Z',
    endTime: '2023-08-31T07:30Z',
    classType: 'C2.4',
    sourceLocation: 'N17W49',
    activeRegionNum: null,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-08-31T05:12:00-CME-001',
      },
    ],
    submissionTime: '2023-08-31T19:22Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26691/-1',
  },
  {
    flrID: '2023-09-01T03:26:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-01T03:26Z',
    peakTime: '2023-09-01T03:52Z',
    endTime: '2023-09-01T04:06Z',
    classType: 'M1.2',
    sourceLocation: 'N09W70',
    activeRegionNum: 13413,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-09-01T03:24:00-CME-001',
      },
      {
        activityID: '2023-09-01T04:34:00-SEP-002',
      },
      {
        activityID: '2023-09-01T04:30:00-SEP-001',
      },
      {
        activityID: '2023-09-01T04:34:00-SEP-001',
      },
      {
        activityID: '2023-09-01T04:34:00-SEP-003',
      },
      {
        activityID: '2023-09-01T04:49:00-SEP-001',
      },
      {
        activityID: '2023-09-01T04:49:00-SEP-002',
      },
      {
        activityID: '2023-09-01T05:05:00-SEP-001',
      },
      {
        activityID: '2023-09-01T05:05:00-SEP-002',
      },
    ],
    submissionTime: '2023-09-01T04:26Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26695/-1',
  },
  {
    flrID: '2023-09-01T21:48:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-01T21:48Z',
    peakTime: '2023-09-01T22:24Z',
    endTime: '2023-09-01T22:33Z',
    classType: 'C7.3',
    sourceLocation: 'S21E44',
    activeRegionNum: 13420,
    note: 'AR was not numbered at time of flare.',
    linkedEvents: [
      {
        activityID: '2023-09-01T23:12:00-CME-001',
      },
    ],
    submissionTime: '2023-09-05T15:19Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26733/-1',
  },
  {
    flrID: '2023-09-01T21:48:00-FLR-002',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-01T21:48Z',
    peakTime: '2023-09-01T22:18Z',
    endTime: '2023-09-01T22:18Z',
    classType: 'C2.5',
    sourceLocation: 'N05W76',
    activeRegionNum: 13413,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-09-02T17:54Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26740/-1',
  },
  {
    flrID: '2023-09-02T06:33:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-02T06:33Z',
    peakTime: '2023-09-02T07:12Z',
    endTime: '2023-09-02T07:38Z',
    classType: 'M3.3',
    sourceLocation: 'N06W89',
    activeRegionNum: 13413,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-09-02T07:12:00-CME-001',
      },
    ],
    submissionTime: '2023-09-02T11:50Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26727/-1',
  },
  {
    flrID: '2023-09-03T00:14:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-03T00:14Z',
    peakTime: '2023-09-03T00:23Z',
    endTime: '2023-09-03T00:33Z',
    classType: 'M1.1',
    sourceLocation: 'N12W90',
    activeRegionNum: 13413,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-09-03T00:36:00-CME-001',
      },
    ],
    submissionTime: '2023-09-03T12:22Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26751/-1',
  },
  {
    flrID: '2023-09-03T04:00:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-03T04:00Z',
    peakTime: '2023-09-03T04:10Z',
    endTime: '2023-09-03T04:14Z',
    classType: 'C1.8',
    sourceLocation: 'N10W90',
    activeRegionNum: 13413,
    note: 'Eruption likely occurs beyond NW limb between W90 to W95.',
    linkedEvents: [
      {
        activityID: '2023-09-03T04:36:00-CME-001',
      },
    ],
    submissionTime: '2023-09-04T01:24Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26783/-1',
  },
  {
    flrID: '2023-09-03T05:18:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-03T05:18Z',
    peakTime: '2023-09-03T06:23Z',
    endTime: '2023-09-03T07:12Z',
    classType: 'C5.9',
    sourceLocation: 'N15W90',
    activeRegionNum: 13413,
    note: 'This solar flare occurs within post-eruptive arcades beyond the western limb, likely associated with AR13413.',
    linkedEvents: [
      {
        activityID: '2023-09-03T05:24:00-CME-001',
      },
    ],
    submissionTime: '2023-09-03T16:41Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26759/-1',
  },
  {
    flrID: '2023-09-03T08:09:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-03T08:09Z',
    peakTime: '2023-09-03T08:36Z',
    endTime: '2023-09-03T08:49Z',
    classType: 'M6.0',
    sourceLocation: 'N12W90',
    activeRegionNum: 13413,
    note: 'Flare originated beyond the western limb, likely around N12W95. Limited stereoscopic viewpoints prevent from seeing the foot point of the flaring region.',
    linkedEvents: [
      {
        activityID: '2023-09-03T09:12:00-CME-001',
      },
    ],
    submissionTime: '2023-09-03T12:09Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26748/-1',
  },
  {
    flrID: '2023-09-03T11:31:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-03T11:31Z',
    peakTime: '2023-09-03T11:45Z',
    endTime: '2023-09-03T12:03Z',
    classType: 'C5.0',
    sourceLocation: 'N09W90',
    activeRegionNum: 13413,
    note: 'Flare likely occurred beyond the western limb (90+ degrees).',
    linkedEvents: [
      {
        activityID: '2023-09-03T12:48:00-CME-001',
      },
    ],
    submissionTime: '2023-09-03T18:02Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26764/-1',
  },
  {
    flrID: '2023-09-03T12:03:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-03T12:03Z',
    peakTime: '2023-09-03T12:28Z',
    endTime: '2023-09-03T12:52Z',
    classType: 'C5.7',
    sourceLocation: 'N09W90',
    activeRegionNum: 13413,
    note: 'Flare likely occurred beyond the western limb (90+ degrees).',
    linkedEvents: [
      {
        activityID: '2023-09-03T12:48:00-CME-001',
      },
    ],
    submissionTime: '2023-09-03T18:04Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26765/-1',
  },
  {
    flrID: '2023-09-04T13:34:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-04T13:34Z',
    peakTime: '2023-09-04T13:49Z',
    endTime: '2023-09-04T14:04Z',
    classType: 'C2.4',
    sourceLocation: 'S22E70',
    activeRegionNum: null,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-09-04T14:09:00-CME-001',
      },
    ],
    submissionTime: '2023-09-04T19:06Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26786/-1',
  },
  {
    flrID: '2023-09-05T08:03:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-05T08:03Z',
    peakTime: '2023-09-05T08:12Z',
    endTime: '2023-09-05T08:24Z',
    classType: 'M2.0',
    sourceLocation: 'N14W02',
    activeRegionNum: 13421,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-09-05T12:01Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26791/-1',
  },
  {
    flrID: '2023-09-05T19:33:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-05T19:33Z',
    peakTime: '2023-09-05T19:45Z',
    endTime: '2023-09-05T19:57Z',
    classType: 'M1.2',
    sourceLocation: 'N15W07',
    activeRegionNum: 13421,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-09-05T20:06Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26805/-1',
  },
  {
    flrID: '2023-09-05T23:21:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-05T23:21Z',
    peakTime: '2023-09-05T23:39Z',
    endTime: '2023-09-05T23:53Z',
    classType: 'M1.0',
    sourceLocation: 'N15W12',
    activeRegionNum: 13421,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-09-06T16:29Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26812/-1',
  },
  {
    flrID: '2023-09-07T18:58:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-07T18:58Z',
    peakTime: '2023-09-07T19:09Z',
    endTime: '2023-09-07T19:24Z',
    classType: 'M2.1',
    sourceLocation: 'N20E55',
    activeRegionNum: 13425,
    note: 'This flare is located on top of a filament, which is between two active regions: AR 13424 (N17E50) and AR 13425 (N23E59).',
    linkedEvents: [
      {
        activityID: '2023-09-07T19:24:00-CME-001',
      },
    ],
    submissionTime: '2023-09-11T14:12Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26821/-1',
  },
  {
    flrID: '2023-09-11T01:08:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-11T01:08Z',
    peakTime: '2023-09-11T01:28Z',
    endTime: '2023-09-11T01:57Z',
    classType: 'M1.3',
    sourceLocation: 'N10E63',
    activeRegionNum: 13429,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-09-11T01:48:00-CME-001',
      },
    ],
    submissionTime: '2023-09-11T18:11Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26852/-1',
  },
  {
    flrID: '2023-09-11T03:58:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-11T03:58Z',
    peakTime: '2023-09-11T04:07Z',
    endTime: '2023-09-11T04:15Z',
    classType: 'M1.1',
    sourceLocation: 'S08E58',
    activeRegionNum: 13431,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-09-11T05:00:00-CME-001',
      },
    ],
    submissionTime: '2023-09-11T11:56Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26853/-1',
  },
  {
    flrID: '2023-09-11T14:38:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-11T14:38Z',
    peakTime: '2023-09-11T14:49Z',
    endTime: '2023-09-11T14:59Z',
    classType: 'M1.1',
    sourceLocation: 'S07E52',
    activeRegionNum: 13431,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-09-11T15:22Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26862/-1',
  },
  {
    flrID: '2023-09-12T04:18:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-S: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-12T04:18Z',
    peakTime: '2023-09-12T04:26Z',
    endTime: '2023-09-12T04:31Z',
    classType: 'M1.9',
    sourceLocation: 'N22E02',
    activeRegionNum: 13425,
    note: 'First peak of two back-to-back flares from AR 3425, with the second peak of M1.8 occurring at 2023-09-12T04:42Z. Further analysis split these flares into two separate ones.',
    linkedEvents: null,
    submissionTime: '2023-09-13T16:45Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26885/-1',
  },
  {
    flrID: '2023-09-12T04:31:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-S: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-12T04:31Z',
    peakTime: '2023-09-12T04:42Z',
    endTime: '2023-09-12T04:47Z',
    classType: 'M1.8',
    sourceLocation: 'N22E02',
    activeRegionNum: 13425,
    note: 'Second peak of two back-to-back flares from AR 3425, with the first peak of M1.9 occurring at 2023-09-12T04:26Z. Further analysis split these flares into two separate ones.',
    linkedEvents: null,
    submissionTime: '2023-09-13T16:43Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26908/-1',
  },
  {
    flrID: '2023-09-12T06:47:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-12T06:47Z',
    peakTime: '2023-09-12T07:07Z',
    endTime: '2023-09-12T07:19Z',
    classType: 'M2.5',
    sourceLocation: 'N16W34',
    activeRegionNum: 13423,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-09-12T12:09Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26879/-1',
  },
  {
    flrID: '2023-09-14T06:40:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-14T06:40Z',
    peakTime: '2023-09-14T07:45Z',
    endTime: '2023-09-14T08:39Z',
    classType: 'M1.4',
    sourceLocation: 'N25W50',
    activeRegionNum: 13429,
    note: 'Long duration flare from a filament eruption located between ARs 3425 and 3423 best seen in SDO AIA 131. The filament spanned approximately N22W40 -> N26W55 at 2023-09-14T06:33Z when it erupted, best seen in SDO AIA 304. \n\nAdditional influence with a separate flare from AR 3429 pushed the peak flux higher to M1.4.',
    linkedEvents: [
      {
        activityID: '2023-09-14T07:24:00-CME-001',
      },
    ],
    submissionTime: '2023-09-18T16:51Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26914/-1',
  },
  {
    flrID: '2023-09-14T19:23:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-14T19:23Z',
    peakTime: '2023-09-14T19:31Z',
    endTime: '2023-09-14T19:40Z',
    classType: 'M1.9',
    sourceLocation: 'N10E09',
    activeRegionNum: 13429,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-09-14T19:44Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26921/-1',
  },
  {
    flrID: '2023-09-14T21:17:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-14T21:17Z',
    peakTime: '2023-09-14T21:26Z',
    endTime: '2023-09-14T21:32Z',
    classType: 'M2.5',
    sourceLocation: 'N10E06',
    activeRegionNum: 13429,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-09-14T23:12:00-CME-001',
      },
    ],
    submissionTime: '2023-09-15T13:01Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26929/-1',
  },
  {
    flrID: '2023-09-15T22:19:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-15T22:19Z',
    peakTime: '2023-09-15T22:29Z',
    endTime: '2023-09-15T22:34Z',
    classType: 'M1.7',
    sourceLocation: 'N10W07',
    activeRegionNum: 13429,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-09-16T12:28Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26943/-1',
  },
  {
    flrID: '2023-09-16T00:38:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-16T00:38Z',
    peakTime: '2023-09-16T00:50Z',
    endTime: '2023-09-16T00:57Z',
    classType: 'M2.9',
    sourceLocation: 'N11W09',
    activeRegionNum: 13429,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-09-16T12:41Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26944/-1',
  },
  {
    flrID: '2023-09-16T05:28:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-16T05:28Z',
    peakTime: '2023-09-16T05:33Z',
    endTime: '2023-09-16T05:34Z',
    classType: 'M2.5',
    sourceLocation: 'N11E90',
    activeRegionNum: 13435,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-09-18T19:09Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26945/-1',
  },
  {
    flrID: '2023-09-16T05:34:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-16T05:34Z',
    peakTime: '2023-09-16T05:38Z',
    endTime: '2023-09-16T06:15Z',
    classType: 'M3.4',
    sourceLocation: 'N11W12',
    activeRegionNum: 13429,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-09-16T12:50Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26946/-1',
  },
  {
    flrID: '2023-09-19T03:45:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-19T03:45Z',
    peakTime: '2023-09-19T03:55Z',
    endTime: '2023-09-19T04:01Z',
    classType: 'M1.1',
    sourceLocation: 'N07E54',
    activeRegionNum: 13435,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-09-19T04:36:00-CME-001',
      },
    ],
    submissionTime: '2023-09-19T12:13Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26990/-1',
  },
  {
    flrID: '2023-09-19T09:23:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-19T09:23Z',
    peakTime: '2023-09-19T09:38Z',
    endTime: '2023-09-19T09:44Z',
    classType: 'M1.8',
    sourceLocation: 'N07E50',
    activeRegionNum: 13435,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-09-19T10:12:00-CME-001',
      },
    ],
    submissionTime: '2023-09-19T12:28Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/26991/-1',
  },
  {
    flrID: '2023-09-19T15:39:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-19T15:39Z',
    peakTime: '2023-09-19T15:52Z',
    endTime: '2023-09-19T16:08Z',
    classType: 'C4.2',
    sourceLocation: 'N20W48',
    activeRegionNum: 13436,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-09-19T16:24:00-CME-001',
      },
    ],
    submissionTime: '2023-09-20T15:54Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27017/-1',
  },
  {
    flrID: '2023-09-19T20:01:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-19T20:01Z',
    peakTime: '2023-09-19T20:14Z',
    endTime: '2023-09-19T20:21Z',
    classType: 'M4.0',
    sourceLocation: 'N07E45',
    activeRegionNum: 13435,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-09-19T20:36:00-CME-001',
      },
    ],
    submissionTime: '2023-09-20T11:21Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27003/-1',
  },
  {
    flrID: '2023-09-20T14:11:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-20T14:11Z',
    peakTime: '2023-09-20T14:19Z',
    endTime: '2023-09-20T14:25Z',
    classType: 'M8.2',
    sourceLocation: 'N07E35',
    activeRegionNum: 13435,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-09-20T15:05:00-CME-001',
      },
    ],
    submissionTime: '2023-09-20T14:35Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27011/-1',
  },
  {
    flrID: '2023-09-21T12:42:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-21T12:42Z',
    peakTime: '2023-09-21T12:54Z',
    endTime: '2023-09-21T13:02Z',
    classType: 'M8.7',
    sourceLocation: 'N08E22',
    activeRegionNum: 13435,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-09-21T13:38:00-CME-001',
      },
    ],
    submissionTime: '2023-09-21T13:14Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27030/-1',
  },
  {
    flrID: '2023-09-22T02:25:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-22T02:25Z',
    peakTime: '2023-09-22T03:36Z',
    endTime: '2023-09-22T06:56Z',
    classType: 'M1.2',
    sourceLocation: 'N15E17',
    activeRegionNum: 13435,
    note: 'Flare location is NE of labeled AR.',
    linkedEvents: null,
    submissionTime: '2023-09-22T12:26Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27042/-1',
  },
  {
    flrID: '2023-09-22T15:53:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-22T15:53Z',
    peakTime: '2023-09-22T16:23Z',
    endTime: '2023-09-22T16:46Z',
    classType: 'M1.4',
    sourceLocation: 'N27W35',
    activeRegionNum: 13443,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-09-22T17:12:00-CME-001',
      },
    ],
    submissionTime: '2023-09-22T16:56Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27056/-1',
  },
  {
    flrID: '2023-09-22T17:06:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-22T17:06Z',
    peakTime: '2023-09-22T17:15Z',
    endTime: '2023-09-22T17:20Z',
    classType: 'M1.5',
    sourceLocation: 'N28W40',
    activeRegionNum: 13443,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-09-22T17:33Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27063/-1',
  },
  {
    flrID: '2023-09-22T22:25:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-22T22:25Z',
    peakTime: '2023-09-22T23:00Z',
    endTime: '2023-09-22T23:13Z',
    classType: 'M1.9',
    sourceLocation: 'N08E03',
    activeRegionNum: 13435,
    note: 'Simultaneous flaring from AR13443 (N28W40) and AR13445 (S17E35).',
    linkedEvents: [
      {
        activityID: '2023-09-22T22:24:00-CME-001',
      },
    ],
    submissionTime: '2023-09-22T23:48Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27068/-1',
  },
  {
    flrID: '2023-09-23T20:14:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-23T20:14Z',
    peakTime: '2023-09-23T20:43Z',
    endTime: '2023-09-23T21:00Z',
    classType: 'M1.5',
    sourceLocation: 'N20W90',
    activeRegionNum: 13436,
    note: 'This flare occurred beyond the NW limb, likely associated with AR3436 which rotated off of the Earth-facing disk on 2023-09-22.',
    linkedEvents: null,
    submissionTime: '2023-09-24T12:57Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27085/-1',
  },
  {
    flrID: '2023-09-24T03:17:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-24T03:17Z',
    peakTime: '2023-09-24T03:28Z',
    endTime: '2023-09-24T03:36Z',
    classType: 'M4.4',
    sourceLocation: 'S14E18',
    activeRegionNum: 13445,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-09-24T12:28Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27086/-1',
  },
  {
    flrID: '2023-09-24T14:51:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-24T14:51Z',
    peakTime: '2023-09-24T15:00Z',
    endTime: '2023-09-24T15:05Z',
    classType: 'M1.0',
    sourceLocation: 'N28W58',
    activeRegionNum: 13443,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-09-24T15:56Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27087/-1',
  },
  {
    flrID: '2023-09-28T08:58:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-28T08:58Z',
    peakTime: '2023-09-28T09:07Z',
    endTime: '2023-09-28T09:11Z',
    classType: 'M1.2',
    sourceLocation: 'S18E63',
    activeRegionNum: 13450,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-09-28T11:59Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27125/-1',
  },
  {
    flrID: '2023-09-30T03:57:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-30T03:57Z',
    peakTime: '2023-09-30T04:09Z',
    endTime: '2023-09-30T04:34Z',
    classType: 'C7.2',
    sourceLocation: 'N15E73',
    activeRegionNum: 13451,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-09-30T04:44:00-CME-001',
      },
    ],
    submissionTime: '2023-09-30T14:42Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27148/-1',
  },
  {
    flrID: '2023-09-30T16:16:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-09-30T16:16Z',
    peakTime: '2023-09-30T16:32Z',
    endTime: '2023-09-30T16:49Z',
    classType: 'M1.2',
    sourceLocation: 'N11E65',
    activeRegionNum: 13451,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-09-30T16:52:00-CME-001',
      },
    ],
    submissionTime: '2023-09-30T17:00Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27149/-1',
  },
  {
    flrID: '2023-10-01T01:10:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-10-01T01:10Z',
    peakTime: '2023-10-01T01:32Z',
    endTime: '2023-10-01T01:43Z',
    classType: 'M2.5',
    sourceLocation: 'N12E58',
    activeRegionNum: 13452,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-10-01T14:10Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27152/-1',
  },
  {
    flrID: '2023-10-01T01:44:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-10-01T01:44Z',
    peakTime: '2023-10-01T01:46Z',
    endTime: '2023-10-01T01:49Z',
    classType: 'M1.6',
    sourceLocation: 'N15E59',
    activeRegionNum: 13451,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-10-01T01:59Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27153/-1',
  },
  {
    flrID: '2023-10-02T12:35:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-10-02T12:35Z',
    peakTime: '2023-10-02T12:46Z',
    endTime: '2023-10-02T12:58Z',
    classType: 'M1.9',
    sourceLocation: 'N19E68',
    activeRegionNum: 13455,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-10-04T15:53Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27160/-1',
  },
  {
    flrID: '2023-10-02T15:53:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-10-02T15:53Z',
    peakTime: '2023-10-02T15:58Z',
    endTime: '2023-10-02T16:02Z',
    classType: 'C2.4',
    sourceLocation: 'S17E02',
    activeRegionNum: 13450,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-10-02T18:24:00-CME-001',
      },
    ],
    submissionTime: '2023-10-03T17:19Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27168/-1',
  },
  {
    flrID: '2023-10-07T17:57:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-10-07T17:57Z',
    peakTime: '2023-10-07T18:06Z',
    endTime: '2023-10-07T18:10Z',
    classType: 'M1.7',
    sourceLocation: 'S12E28',
    activeRegionNum: 13457,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-10-07T18:24Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27212/-1',
  },
  {
    flrID: '2023-10-10T01:55:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-10-10T01:55Z',
    peakTime: '2023-10-10T02:09Z',
    endTime: '2023-10-10T02:22Z',
    classType: 'M1.6',
    sourceLocation: 'N14W65',
    activeRegionNum: 13452,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-10-10T02:45Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27232/-1',
  },
  {
    flrID: '2023-10-10T12:08:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-10-10T12:08Z',
    peakTime: '2023-10-10T12:17Z',
    endTime: '2023-10-10T12:29Z',
    classType: 'M2.3',
    sourceLocation: 'N12W70',
    activeRegionNum: 13451,
    note: 'This flare occurs between Active Regions 13451 and 13452, but is assigned to AR 13451.',
    linkedEvents: null,
    submissionTime: '2023-10-11T12:42Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27235/-1',
  },
  {
    flrID: '2023-10-12T04:50:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-S: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-10-12T04:50Z',
    peakTime: '2023-10-12T04:58Z',
    endTime: '2023-10-12T05:05Z',
    classType: 'M1.1',
    sourceLocation: 'N17W90',
    activeRegionNum: 13451,
    note: 'AR 3451 is seen on the west limb in SDO AIA imagery at the time of this flare. GOES-Primary not available due to eclipse at the time of this flare.',
    linkedEvents: null,
    submissionTime: '2023-10-12T12:10Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27258/-1',
  },
  {
    flrID: '2023-10-12T05:56:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-10-12T05:56Z',
    peakTime: '2023-10-12T06:00Z',
    endTime: '2023-10-12T06:11Z',
    classType: 'C2.8',
    sourceLocation: 'N05E45',
    activeRegionNum: 13464,
    note: 'Double peaked flare, with second peak at 2023-10-12T06:04Z.',
    linkedEvents: [
      {
        activityID: '2023-10-12T07:36:00-CME-001',
      },
    ],
    submissionTime: '2023-10-12T17:19Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27270/-1',
  },
  {
    flrID: '2023-10-16T10:32:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-10-16T10:32Z',
    peakTime: '2023-10-16T10:51Z',
    endTime: '2023-10-16T11:07Z',
    classType: 'C7.5',
    sourceLocation: 'N13E47',
    activeRegionNum: 13467,
    note: 'Shortly followed by a C4.9 class flare from the same AR. Associated with an eruption and CME with ID 2023-10-16T12:09:00-CME-001.',
    linkedEvents: [
      {
        activityID: '2023-10-16T12:09:00-CME-001',
      },
    ],
    submissionTime: '2023-10-16T16:30Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27323/-1',
  },
  {
    flrID: '2023-10-17T04:41:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-10-17T04:41Z',
    peakTime: '2023-10-17T05:05Z',
    endTime: '2023-10-17T05:47Z',
    classType: 'C2.2',
    sourceLocation: 'S20W32',
    activeRegionNum: 13463,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-10-17T05:48:00-CME-001',
      },
    ],
    submissionTime: '2023-10-17T17:19Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27331/-1',
  },
  {
    flrID: '2023-10-25T12:55:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-10-25T12:55Z',
    peakTime: '2023-10-25T13:06Z',
    endTime: '2023-10-25T13:17Z',
    classType: 'C1.7',
    sourceLocation: 'S17E80',
    activeRegionNum: 13474,
    note: 'Likely from AR 3474, numbered on 2023-10-27.',
    linkedEvents: [
      {
        activityID: '2023-10-25T14:01:00-CME-001',
      },
    ],
    submissionTime: '2023-10-31T13:41Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27473/-1',
  },
  {
    flrID: '2023-10-25T21:57:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-10-25T21:57Z',
    peakTime: '2023-10-25T22:15Z',
    endTime: '2023-10-25T22:33Z',
    classType: 'C1.6',
    sourceLocation: 'N27W90',
    activeRegionNum: null,
    note: 'Likely in the range of N27W100 in association with the position of old AR 3469 at this timestamp, which is over the west limb but the flare is visible.',
    linkedEvents: [
      {
        activityID: '2023-10-25T22:36:00-CME-001',
      },
    ],
    submissionTime: '2023-10-26T20:34Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27476/-1',
  },
  {
    flrID: '2023-10-26T22:47:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-10-26T22:47Z',
    peakTime: '2023-10-26T23:24Z',
    endTime: '2023-10-27T00:20Z',
    classType: 'M1.4',
    sourceLocation: 'N20E90',
    activeRegionNum: null,
    note: 'Based on SDO AIA imagery, this flare appears to be located near the east limb, east of AR 3473 which was numbered on 2023-10-26. There was some flaring near AR 3473 at the time of this flare.',
    linkedEvents: [
      {
        activityID: '2023-10-26T23:14:00-CME-001',
      },
    ],
    submissionTime: '2023-10-31T13:44Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27481/-1',
  },
  {
    flrID: '2023-10-31T20:16:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-10-31T20:16Z',
    peakTime: '2023-10-31T20:24Z',
    endTime: '2023-10-31T20:29Z',
    classType: 'C3.9',
    sourceLocation: 'S14E85',
    activeRegionNum: 13477,
    note: 'Simultaneous flaring/brightening occurs from an eruption near the limb centered around S09E90, which was associated with CME: 2023-10-31T21:12Z.',
    linkedEvents: [
      {
        activityID: '2023-10-31T21:12:00-CME-001',
      },
    ],
    submissionTime: '2023-11-01T15:49Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27535/-1',
  },
  {
    flrID: '2023-11-01T06:07:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-01T06:07Z',
    peakTime: '2023-11-01T06:26Z',
    endTime: '2023-11-01T06:49Z',
    classType: 'M1.1',
    sourceLocation: 'S15E80',
    activeRegionNum: 13477,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-11-01T16:30Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27527/-1',
  },
  {
    flrID: '2023-11-01T11:37:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-01T11:37Z',
    peakTime: '2023-11-01T12:26Z',
    endTime: '2023-11-01T13:00Z',
    classType: 'M1.4',
    sourceLocation: 'S10E90',
    activeRegionNum: 13480,
    note: 'This flare occurred from a region just beyond the limb which was unnumbered at the time. As this region rotated onto the Earth-facing disk it was likely numbered as Active Region 13480.',
    linkedEvents: [
      {
        activityID: '2023-11-01T13:25:00-CME-001',
      },
    ],
    submissionTime: '2023-11-03T16:17Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27529/-1',
  },
  {
    flrID: '2023-11-02T05:15:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-02T05:15Z',
    peakTime: '2023-11-02T05:22Z',
    endTime: '2023-11-02T05:29Z',
    classType: 'C4.9',
    sourceLocation: 'S10E90',
    activeRegionNum: null,
    note: 'This solar flare occurred from an unnumbered region near the eastern limb.',
    linkedEvents: [
      {
        activityID: '2023-11-02T06:00:00-CME-001',
      },
    ],
    submissionTime: '2023-11-02T16:47Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27558/-1',
  },
  {
    flrID: '2023-11-02T12:18:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-02T12:18Z',
    peakTime: '2023-11-02T12:22Z',
    endTime: '2023-11-02T12:26Z',
    classType: 'M1.6',
    sourceLocation: 'S18W35',
    activeRegionNum: 13474,
    note: 'Inpulsive (short duration) flare.',
    linkedEvents: null,
    submissionTime: '2023-11-02T13:49Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27550/-1',
  },
  {
    flrID: '2023-11-02T19:08:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-02T19:08Z',
    peakTime: '2023-11-02T19:21Z',
    endTime: '2023-11-02T19:28Z',
    classType: 'M1.0',
    sourceLocation: 'S10E85',
    activeRegionNum: 13480,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-11-02T19:48:00-CME-001',
      },
    ],
    submissionTime: '2023-11-03T18:57Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27559/-1',
  },
  {
    flrID: '2023-11-03T04:40:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-03T04:40Z',
    peakTime: '2023-11-03T06:17Z',
    endTime: '2023-11-03T07:00Z',
    classType: 'C3.2',
    sourceLocation: 'N30W30',
    activeRegionNum: null,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-11-03T05:48:00-CME-001',
      },
    ],
    submissionTime: '2023-11-03T18:44Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27572/-1',
  },
  {
    flrID: '2023-11-05T11:34:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-05T11:34Z',
    peakTime: '2023-11-05T11:43Z',
    endTime: '2023-11-05T11:47Z',
    classType: 'M1.8',
    sourceLocation: 'S09E52',
    activeRegionNum: 13480,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-11-05T14:04Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27607/-1',
  },
  {
    flrID: '2023-11-05T14:24:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-05T14:24Z',
    peakTime: '2023-11-05T14:32Z',
    endTime: '2023-11-05T14:36Z',
    classType: 'M1.6',
    sourceLocation: 'S09E51',
    activeRegionNum: 13480,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-11-05T15:16Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27609/-1',
  },
  {
    flrID: '2023-11-09T10:53:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-09T10:53Z',
    peakTime: '2023-11-09T11:18Z',
    endTime: '2023-11-09T12:01Z',
    classType: 'C2.6',
    sourceLocation: 'S11W05',
    activeRegionNum: 13480,
    note: 'Associated with eruption characterized by dimming and halo CME.',
    linkedEvents: [
      {
        activityID: '2023-11-09T12:23:00-CME-001',
      },
    ],
    submissionTime: '2023-11-09T14:46Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27657/-1',
  },
  {
    flrID: '2023-11-11T17:01:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-11T17:01Z',
    peakTime: '2023-11-11T17:29Z',
    endTime: '2023-11-11T17:45Z',
    classType: 'M1.2',
    sourceLocation: 'S17W64',
    activeRegionNum: 13477,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-11-11T17:57Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27672/-1',
  },
  {
    flrID: '2023-11-14T03:40:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-14T03:40Z',
    peakTime: '2023-11-14T03:45Z',
    endTime: '2023-11-14T04:03Z',
    classType: 'C1.8',
    sourceLocation: 'S20W65',
    activeRegionNum: 13485,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-11-14T04:00:00-CME-001',
      },
    ],
    submissionTime: '2023-11-14T14:49Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27690/-1',
  },
  {
    flrID: '2023-11-14T22:58:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-14T22:58Z',
    peakTime: '2023-11-14T23:05Z',
    endTime: '2023-11-14T23:09Z',
    classType: 'M1.0',
    sourceLocation: 'S17W75',
    activeRegionNum: 13485,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-11-14T23:24:00-CME-001',
      },
    ],
    submissionTime: '2023-11-15T17:56Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27698/-1',
  },
  {
    flrID: '2023-11-15T03:55:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-15T03:55Z',
    peakTime: '2023-11-15T04:01Z',
    endTime: '2023-11-15T04:06Z',
    classType: 'C8.3',
    sourceLocation: 'S20W80',
    activeRegionNum: 13485,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-11-15T04:24:00-CME-001',
      },
    ],
    submissionTime: '2023-11-15T19:03Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27714/-1',
  },
  {
    flrID: '2023-11-15T12:05:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-15T12:05Z',
    peakTime: '2023-11-15T12:12Z',
    endTime: '2023-11-15T12:18Z',
    classType: 'C7.6',
    sourceLocation: 'S20W95',
    activeRegionNum: 13485,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-11-15T12:36:00-CME-001',
      },
    ],
    submissionTime: '2023-11-15T19:16Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27717/-1',
  },
  {
    flrID: '2023-11-16T20:03:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-16T20:03Z',
    peakTime: '2023-11-16T20:22Z',
    endTime: '2023-11-16T20:53Z',
    classType: 'C4.8',
    sourceLocation: 'S15E88',
    activeRegionNum: null,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-11-16T22:00:00-CME-001',
      },
    ],
    submissionTime: '2023-11-17T19:41Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27741/-1',
  },
  {
    flrID: '2023-11-18T05:37:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-18T05:37Z',
    peakTime: '2023-11-18T05:42Z',
    endTime: '2023-11-18T05:50Z',
    classType: 'M1.2',
    sourceLocation: 'N21E95',
    activeRegionNum: 13490,
    note: 'This flare occurred near the eastern limb from a region that was unnumbered at the time, but has since been numbered as Active Region 13490.',
    linkedEvents: null,
    submissionTime: '2023-11-21T18:15Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27756/-1',
  },
  {
    flrID: '2023-11-18T16:34:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-18T16:34Z',
    peakTime: '2023-11-18T16:44Z',
    endTime: '2023-11-18T16:54Z',
    classType: 'M1.1',
    sourceLocation: 'N17E92',
    activeRegionNum: 13490,
    note: 'This flare occurred near the eastern limb from a region that was unnumbered at the time, but has since been numbered as Active Region 13490.',
    linkedEvents: null,
    submissionTime: '2023-11-21T18:15Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27762/-1',
  },
  {
    flrID: '2023-11-18T22:26:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-18T22:26Z',
    peakTime: '2023-11-18T22:34Z',
    endTime: '2023-11-18T22:40Z',
    classType: 'M1.0',
    sourceLocation: 'N15E90',
    activeRegionNum: 13490,
    note: 'This flare occurred near the eastern limb from a region that was unnumbered at the time, but has since been numbered as Active Region 13490.',
    linkedEvents: null,
    submissionTime: '2023-11-21T18:14Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27764/-1',
  },
  {
    flrID: '2023-11-20T08:54:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-20T08:54Z',
    peakTime: '2023-11-20T09:03Z',
    endTime: '2023-11-20T09:12Z',
    classType: 'M1.2',
    sourceLocation: 'N20E72',
    activeRegionNum: 13492,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-11-21T18:05Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27777/-1',
  },
  {
    flrID: '2023-11-22T18:58:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-22T18:58Z',
    peakTime: '2023-11-22T19:02Z',
    endTime: '2023-11-22T19:25Z',
    classType: 'C4.1',
    sourceLocation: 'S15E07',
    activeRegionNum: 13489,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-11-22T21:36:00-CME-001',
      },
    ],
    submissionTime: '2023-11-23T18:01Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27833/-1',
  },
  {
    flrID: '2023-11-23T02:59:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-23T02:59Z',
    peakTime: '2023-11-23T03:38Z',
    endTime: '2023-11-23T04:05Z',
    classType: 'M1.4',
    sourceLocation: 'N25E110',
    activeRegionNum: 13503,
    note: 'This flare was due to post-eruptive arcades seen beyond the northeast limb. Flare spanned an apparent latitude of about N20-N30, and the eruption is approximated to be at a longitude of about E100-120. This flare may be associated with AR 3503, which was numbered on 2023-11-25.',
    linkedEvents: [
      {
        activityID: '2023-11-23T03:12:00-CME-001',
      },
    ],
    submissionTime: '2023-11-28T15:00Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27827/-1',
  },
  {
    flrID: '2023-11-23T14:25:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-23T14:25Z',
    peakTime: '2023-11-23T14:37Z',
    endTime: '2023-11-23T14:42Z',
    classType: 'M1.0',
    sourceLocation: 'N20E16',
    activeRegionNum: 13490,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-11-23T14:46Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27828/-1',
  },
  {
    flrID: '2023-11-24T09:17:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-24T09:17Z',
    peakTime: '2023-11-24T09:33Z',
    endTime: '2023-11-24T09:43Z',
    classType: 'M1.1',
    sourceLocation: 'S18W02',
    activeRegionNum: 13499,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-11-24T10:12:00-CME-001',
      },
    ],
    submissionTime: '2023-11-24T15:24Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27851/-1',
  },
  {
    flrID: '2023-11-26T07:38:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-26T07:38Z',
    peakTime: '2023-11-26T07:43Z',
    endTime: '2023-11-26T07:51Z',
    classType: 'C3.6',
    sourceLocation: 'N20W18',
    activeRegionNum: 13490,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-11-26T08:36:00-CME-001',
      },
    ],
    submissionTime: '2023-11-26T17:53Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27887/-1',
  },
  {
    flrID: '2023-11-27T18:21:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-27T18:21Z',
    peakTime: '2023-11-27T18:37Z',
    endTime: '2023-11-27T18:40Z',
    classType: 'C3.8',
    sourceLocation: 'N20E15',
    activeRegionNum: null,
    note: 'Flare from an unnumbered region of enhanced flux around N20E15. This flare is immediately followed by a C6.7 class flare peaking at 2023-11-27T18:52Z from AR 3500 (approx. S19E15)',
    linkedEvents: [
      {
        activityID: '2023-11-27T20:12:00-CME-001',
      },
    ],
    submissionTime: '2023-11-28T03:48Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27900/-1',
  },
  {
    flrID: '2023-11-27T23:13:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-27T23:13Z',
    peakTime: '2023-11-27T23:40Z',
    endTime: '2023-11-28T00:26Z',
    classType: 'C5.5',
    sourceLocation: 'N26E40',
    activeRegionNum: null,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-11-27T23:48:00-CME-001',
      },
    ],
    submissionTime: '2023-11-28T21:53Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27914/-1',
  },
  {
    flrID: '2023-11-28T19:07:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-28T19:07Z',
    peakTime: '2023-11-28T19:32Z',
    endTime: '2023-11-28T19:35Z',
    classType: 'M3.4',
    sourceLocation: 'S16W02',
    activeRegionNum: 13500,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-11-28T20:24:00-CME-001',
      },
      {
        activityID: '2023-11-28T20:48:00-CME-001',
      },
    ],
    submissionTime: '2023-11-28T19:51Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27904/-1',
  },
  {
    flrID: '2023-11-28T19:35:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-28T19:35Z',
    peakTime: '2023-11-28T19:50Z',
    endTime: '2023-11-28T20:09Z',
    classType: 'M9.8',
    sourceLocation: 'S16W03',
    activeRegionNum: 13500,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-11-28T20:24:00-CME-001',
      },
      {
        activityID: '2023-11-28T20:48:00-CME-001',
      },
    ],
    submissionTime: '2023-11-28T20:13Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27908/-1',
  },
  {
    flrID: '2023-11-30T22:37:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-11-30T22:37Z',
    peakTime: '2023-11-30T22:48Z',
    endTime: '2023-11-30T22:56Z',
    classType: 'C3.6',
    sourceLocation: 'S17W90',
    activeRegionNum: 13499,
    note: 'This flare occurs near the western limb so it is difficult to determine a precise longitude, but it likely occurs near or from Active Region 13499.',
    linkedEvents: [
      {
        activityID: '2023-11-30T23:12:00-CME-001',
      },
    ],
    submissionTime: '2023-12-01T16:51Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27955/-1',
  },
  {
    flrID: '2023-12-01T02:52:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-01T02:52Z',
    peakTime: '2023-12-01T03:11Z',
    endTime: '2023-12-01T03:24Z',
    classType: 'C4.8',
    sourceLocation: 'N18W90',
    activeRegionNum: null,
    note: 'This flare occurred near the NW limb and is possibly associated with Active Region 13492, 13497 or a region just on/beyond the western limb.',
    linkedEvents: [
      {
        activityID: '2023-12-01T03:24:00-CME-001',
      },
    ],
    submissionTime: '2023-12-01T17:03Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27956/-1',
  },
  {
    flrID: '2023-12-01T04:12:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-01T04:12Z',
    peakTime: '2023-12-01T04:39Z',
    endTime: '2023-12-01T05:07Z',
    classType: 'M1.1',
    sourceLocation: 'N12W80',
    activeRegionNum: 13502,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-12-01T15:56Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27944/-1',
  },
  {
    flrID: '2023-12-01T11:48:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-01T11:48Z',
    peakTime: '2023-12-01T11:59Z',
    endTime: '2023-12-01T12:05Z',
    classType: 'C5.2',
    sourceLocation: 'S20W38',
    activeRegionNum: 13500,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-12-01T12:36:00-CME-001',
      },
    ],
    submissionTime: '2023-12-01T18:41Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27961/-1',
  },
  {
    flrID: '2023-12-01T20:55:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-01T20:55Z',
    peakTime: '2023-12-01T21:20Z',
    endTime: '2023-12-01T22:10Z',
    classType: 'M1.0',
    sourceLocation: 'S18W40',
    activeRegionNum: 13500,
    note: 'Simultaneous impulsive flare from AR 13493 (S13W73) and emission associated with post-eruptive arcades from AR 13500 (S18W40).',
    linkedEvents: [
      {
        activityID: '2023-12-01T22:24:00-CME-001',
      },
    ],
    submissionTime: '2023-12-02T15:44Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/27969/-1',
  },
  {
    flrID: '2023-12-05T06:39:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-05T06:39Z',
    peakTime: '2023-12-05T06:44Z',
    endTime: '2023-12-05T06:48Z',
    classType: 'M1.5',
    sourceLocation: 'N18E73',
    activeRegionNum: 13513,
    note: 'This flare directly precedes a C5.3 class flare from AR 3500 peaking at 2023-12-05T06:58Z.',
    linkedEvents: null,
    submissionTime: '2023-12-05T17:29Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28014/-1',
  },
  {
    flrID: '2023-12-05T06:48:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-05T06:48Z',
    peakTime: '2023-12-05T06:58Z',
    endTime: '2023-12-05T07:06Z',
    classType: 'C5.3',
    sourceLocation: 'S18W90',
    activeRegionNum: 13500,
    note: 'This flare directly follows the M1.5 flare from AR 3513 peaking at 2023-12-05T06:44Z with end time 2023-12-05T06:48Z.',
    linkedEvents: [
      {
        activityID: '2023-12-05T07:48:00-CME-001',
      },
    ],
    submissionTime: '2023-12-05T17:51Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28017/-1',
  },
  {
    flrID: '2023-12-05T20:59:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-05T20:59Z',
    peakTime: '2023-12-05T21:10Z',
    endTime: '2023-12-05T21:17Z',
    classType: 'M1.0',
    sourceLocation: 'N19E69',
    activeRegionNum: 13513,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-12-05T23:32Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28030/-1',
  },
  {
    flrID: '2023-12-05T21:17:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-05T21:17Z',
    peakTime: '2023-12-05T21:20Z',
    endTime: '2023-12-05T21:25Z',
    classType: 'M1.4',
    sourceLocation: 'N19E69',
    activeRegionNum: 13513,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-12-05T23:31Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28031/-1',
  },
  {
    flrID: '2023-12-06T05:30:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-06T05:30Z',
    peakTime: '2023-12-06T05:41Z',
    endTime: '2023-12-06T05:52Z',
    classType: 'M2.1',
    sourceLocation: 'N19E65',
    activeRegionNum: 13513,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-12-06T13:06Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28033/-1',
  },
  {
    flrID: '2023-12-06T21:26:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-06T21:26Z',
    peakTime: '2023-12-06T21:44Z',
    endTime: '2023-12-06T21:55Z',
    classType: 'M2.3',
    sourceLocation: 'N19E55',
    activeRegionNum: 13513,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-12-06T22:17Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28042/-1',
  },
  {
    flrID: '2023-12-08T22:57:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-08T22:57Z',
    peakTime: '2023-12-08T23:07Z',
    endTime: '2023-12-08T23:14Z',
    classType: 'M5.4',
    sourceLocation: 'S21W50',
    activeRegionNum: 13511,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-12-08T23:31Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28084/-1',
  },
  {
    flrID: '2023-12-09T09:41:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-09T09:41Z',
    peakTime: '2023-12-09T09:55Z',
    endTime: '2023-12-09T10:06Z',
    classType: 'M1.5',
    sourceLocation: 'S22W57',
    activeRegionNum: 13511,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-12-09T13:33Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28087/-1',
  },
  {
    flrID: '2023-12-09T13:03:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-09T13:03Z',
    peakTime: '2023-12-09T13:19Z',
    endTime: '2023-12-09T13:37Z',
    classType: 'M1.0',
    sourceLocation: 'S22W58',
    activeRegionNum: 13511,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-12-09T13:55Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28088/-1',
  },
  {
    flrID: '2023-12-10T03:42:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-10T03:42Z',
    peakTime: '2023-12-10T03:53Z',
    endTime: '2023-12-10T03:58Z',
    classType: 'M2.3',
    sourceLocation: 'S22W67',
    activeRegionNum: 13511,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-12-10T04:38Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28102/-1',
  },
  {
    flrID: '2023-12-10T22:37:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-10T22:37Z',
    peakTime: '2023-12-10T22:43Z',
    endTime: '2023-12-10T22:47Z',
    classType: 'M1.4',
    sourceLocation: 'S21W77',
    activeRegionNum: 13511,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-12-11T13:25Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28106/-1',
  },
  {
    flrID: '2023-12-11T19:56:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-11T19:56Z',
    peakTime: '2023-12-11T20:02Z',
    endTime: '2023-12-11T20:07Z',
    classType: 'C1.6',
    sourceLocation: 'S20E40',
    activeRegionNum: 13516,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-12-11T21:36:00-CME-001',
      },
    ],
    submissionTime: '2023-12-12T20:53Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28116/-1',
  },
  {
    flrID: '2023-12-12T22:29:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-12T22:29Z',
    peakTime: '2023-12-12T22:55Z',
    endTime: '2023-12-12T00:29Z',
    classType: 'C2.8',
    sourceLocation: 'N06W25',
    activeRegionNum: 13514,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-12-13T00:00:00-CME-001',
      },
    ],
    submissionTime: '2023-12-13T19:00Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28128/-1',
  },
  {
    flrID: '2023-12-14T07:11:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-14T07:11Z',
    peakTime: '2023-12-14T07:44Z',
    endTime: '2023-12-14T08:00Z',
    classType: 'M5.8',
    sourceLocation: 'N05W50',
    activeRegionNum: 13514,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-12-14T08:36:00-CME-001',
      },
    ],
    submissionTime: '2023-12-14T13:09Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28139/-1',
  },
  {
    flrID: '2023-12-14T13:29:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-14T13:29Z',
    peakTime: '2023-12-14T13:48Z',
    endTime: '2023-12-14T14:08Z',
    classType: 'M2.3',
    sourceLocation: 'N05W52',
    activeRegionNum: 13514,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-12-14T16:22Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28143/-1',
  },
  {
    flrID: '2023-12-14T16:47:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-14T16:47Z',
    peakTime: '2023-12-14T17:02Z',
    endTime: '2023-12-14T17:12Z',
    classType: 'X2.8',
    sourceLocation: 'N05W54',
    activeRegionNum: 13514,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-12-14T17:38:00-CME-001',
      },
      {
        activityID: '2023-12-15T10:05:00-SEP-001',
      },
      {
        activityID: '2023-12-15T14:57:00-SEP-001',
      },
      {
        activityID: '2023-12-15T15:42:00-SEP-001',
      },
      {
        activityID: '2023-12-15T23:45:00-SEP-001',
      },
    ],
    submissionTime: '2023-12-14T17:15Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28145/-1',
  },
  {
    flrID: '2023-12-15T07:03:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-15T07:03Z',
    peakTime: '2023-12-15T07:15Z',
    endTime: '2023-12-15T07:23Z',
    classType: 'M6.3',
    sourceLocation: 'N03W59',
    activeRegionNum: 13514,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-12-15T07:48:00-CME-001',
      },
      {
        activityID: '2023-12-15T10:05:00-SEP-001',
      },
      {
        activityID: '2023-12-15T14:57:00-SEP-001',
      },
      {
        activityID: '2023-12-15T15:42:00-SEP-001',
      },
      {
        activityID: '2023-12-15T23:45:00-SEP-001',
      },
    ],
    submissionTime: '2023-12-15T07:54Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28171/-1',
  },
  {
    flrID: '2023-12-15T07:23:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-15T07:23Z',
    peakTime: '2023-12-15T07:34Z',
    endTime: '2023-12-15T07:43Z',
    classType: 'M6.9',
    sourceLocation: 'N02W66',
    activeRegionNum: 13514,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-12-15T07:48:00-CME-001',
      },
      {
        activityID: '2023-12-15T10:05:00-SEP-001',
      },
      {
        activityID: '2023-12-15T14:57:00-SEP-001',
      },
      {
        activityID: '2023-12-15T15:42:00-SEP-001',
      },
      {
        activityID: '2023-12-15T23:45:00-SEP-001',
      },
    ],
    submissionTime: '2023-12-15T07:53Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28173/-1',
  },
  {
    flrID: '2023-12-16T13:19:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-16T13:19Z',
    peakTime: '2023-12-16T13:54Z',
    endTime: '2023-12-16T14:12Z',
    classType: 'C8.3',
    sourceLocation: 'N06W76',
    activeRegionNum: 13514,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-12-16T15:09:00-CME-001',
      },
    ],
    submissionTime: '2023-12-16T18:25Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28196/-1',
  },
  {
    flrID: '2023-12-17T20:08:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-17T20:08Z',
    peakTime: '2023-12-17T20:17Z',
    endTime: '2023-12-17T20:21Z',
    classType: 'M1.1',
    sourceLocation: 'N05W90',
    activeRegionNum: 13514,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-12-17T20:40Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28235/-1',
  },
  {
    flrID: '2023-12-20T09:23:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-20T09:23Z',
    peakTime: '2023-12-20T09:36Z',
    endTime: '2023-12-20T09:55Z',
    classType: 'C7.9',
    sourceLocation: 'S10W50',
    activeRegionNum: 13519,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-12-20T10:24:00-CME-001',
      },
    ],
    submissionTime: '2023-12-20T18:57Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28266/-1',
  },
  {
    flrID: '2023-12-21T05:19:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-21T05:19Z',
    peakTime: '2023-12-21T05:38Z',
    endTime: '2023-12-21T05:49Z',
    classType: 'M4.2',
    sourceLocation: 'S11W61',
    activeRegionNum: 13519,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-12-21T06:09:00-CME-001',
      },
    ],
    submissionTime: '2023-12-21T12:52Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28271/-1',
  },
  {
    flrID: '2023-12-21T23:42:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-21T23:42Z',
    peakTime: '2023-12-22T00:04Z',
    endTime: '2023-12-22T00:19Z',
    classType: 'M3.3',
    sourceLocation: 'S12W72',
    activeRegionNum: 13519,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-12-22T00:24:00-CME-001',
      },
    ],
    submissionTime: '2023-12-22T13:07Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28282/-1',
  },
  {
    flrID: '2023-12-22T00:57:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-22T00:57Z',
    peakTime: '2023-12-22T01:10Z',
    endTime: '2023-12-22T01:33Z',
    classType: 'C8.1',
    sourceLocation: 'S11W72',
    activeRegionNum: 13519,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-12-22T01:25:00-CME-001',
      },
    ],
    submissionTime: '2023-12-22T21:47Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28302/-1',
  },
  {
    flrID: '2023-12-22T04:46:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-22T04:46Z',
    peakTime: '2023-12-22T04:57Z',
    endTime: '2023-12-22T05:02Z',
    classType: 'C7.8',
    sourceLocation: 'S10W71',
    activeRegionNum: 13519,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-12-22T05:12:00-CME-001',
      },
    ],
    submissionTime: '2023-12-22T18:33Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28291/-1',
  },
  {
    flrID: '2023-12-24T11:09:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-24T11:09Z',
    peakTime: '2023-12-24T11:18Z',
    endTime: '2023-12-24T11:24Z',
    classType: 'M2.9',
    sourceLocation: 'S20W25',
    activeRegionNum: 13529,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-12-24T13:51Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28316/-1',
  },
  {
    flrID: '2023-12-24T16:37:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-24T16:37Z',
    peakTime: '2023-12-24T16:49Z',
    endTime: '2023-12-24T16:56Z',
    classType: 'M2.6',
    sourceLocation: 'S20W30',
    activeRegionNum: 13529,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-12-24T17:32Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28325/-1',
  },
  {
    flrID: '2023-12-24T19:21:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-24T19:21Z',
    peakTime: '2023-12-24T19:51Z',
    endTime: '0023-12-24T20:16Z',
    classType: 'M1.1',
    sourceLocation: 'S23E90',
    activeRegionNum: null,
    note: 'This flare occurred from an unnumbered region just beyond the SE limb.',
    linkedEvents: [
      {
        activityID: '2023-12-24T20:00:00-CME-001',
      },
    ],
    submissionTime: '2023-12-24T21:24Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28328/-1',
  },
  {
    flrID: '2023-12-31T18:44:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-31T18:44Z',
    peakTime: '2023-12-31T19:12Z',
    endTime: '2023-12-31T19:40Z',
    classType: 'M1.0',
    sourceLocation: 'N04E80',
    activeRegionNum: 13536,
    note: '',
    linkedEvents: null,
    submissionTime: '2023-12-31T22:10Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28413/-1',
  },
  {
    flrID: '2023-12-31T21:40:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2023-12-31T21:37Z',
    peakTime: '2023-12-31T21:55Z',
    endTime: '2023-12-31T22:08Z',
    classType: 'X5.0',
    sourceLocation: 'N04E80',
    activeRegionNum: 13536,
    note: '',
    linkedEvents: [
      {
        activityID: '2023-12-31T22:00:00-CME-001',
      },
      {
        activityID: '2024-01-02T23:22:00-SEP-001',
      },
      {
        activityID: '2024-01-02T23:22:00-SEP-002',
      },
      {
        activityID: '2024-01-03T00:15:00-SEP-001',
      },
      {
        activityID: '2024-01-03T19:10:00-SEP-001',
      },
      {
        activityID: '2024-01-03T20:05:00-SEP-001',
      },
    ],
    submissionTime: '2023-12-31T22:17Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28419/-1',
  },
  {
    flrID: '2024-01-01T08:33:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-01T08:33Z',
    peakTime: '2024-01-01T08:54Z',
    endTime: '2024-01-01T09:04Z',
    classType: 'M2.3',
    sourceLocation: 'N03E70',
    activeRegionNum: 13536,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-01-01T13:28Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28428/-1',
  },
  {
    flrID: '2024-01-01T11:54:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-01T11:54Z',
    peakTime: '2024-01-01T12:25Z',
    endTime: '2024-01-01T12:35Z',
    classType: 'M4.7',
    sourceLocation: 'N03E68',
    activeRegionNum: 13536,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-01-01T13:24Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28427/-1',
  },
  {
    flrID: '2024-01-02T18:02:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-02T18:02Z',
    peakTime: '2024-01-02T18:30Z',
    endTime: '2024-01-02T18:56Z',
    classType: 'M1.1',
    sourceLocation: 'N05E59',
    activeRegionNum: 13536,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-02T19:36:00-CME-001',
      },
    ],
    submissionTime: '2024-01-02T19:34Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28438/-1',
  },
  {
    flrID: '2024-01-04T01:08:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-04T01:08Z',
    peakTime: '2024-01-04T01:16Z',
    endTime: '2024-01-04T01:22Z',
    classType: 'M1.1',
    sourceLocation: 'N02E38',
    activeRegionNum: 13536,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-01-04T01:44Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28470/-1',
  },
  {
    flrID: '2024-01-04T01:22:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-04T01:22Z',
    peakTime: '2024-01-04T01:55Z',
    endTime: '2024-01-04T02:12Z',
    classType: 'M3.8',
    sourceLocation: 'N04E38',
    activeRegionNum: 13536,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-01-04T03:00Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28471/-1',
  },
  {
    flrID: '2024-01-06T05:28:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-06T05:28Z',
    peakTime: '2024-01-06T05:37Z',
    endTime: '2024-01-06T05:41Z',
    classType: 'C3.3',
    sourceLocation: 'N02E01',
    activeRegionNum: 13536,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-06T08:12:00-CME-001',
      },
    ],
    submissionTime: '2024-01-06T23:44Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28511/-1',
  },
  {
    flrID: '2024-01-06T05:41:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-06T05:41Z',
    peakTime: '2024-01-06T05:47Z',
    endTime: '2024-01-06T05:53Z',
    classType: 'C3.8',
    sourceLocation: 'N02E01',
    activeRegionNum: 13536,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-06T08:12:00-CME-001',
      },
    ],
    submissionTime: '2024-01-06T23:45Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28512/-1',
  },
  {
    flrID: '2024-01-06T05:53:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-06T05:53Z',
    peakTime: '2024-01-06T05:59Z',
    endTime: '2024-01-06T06:04Z',
    classType: 'C4.1',
    sourceLocation: 'N02E03',
    activeRegionNum: 13536,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-06T08:12:00-CME-001',
      },
    ],
    submissionTime: '2024-01-06T23:45Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28513/-1',
  },
  {
    flrID: '2024-01-06T06:06:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-06T06:06Z',
    peakTime: '2024-01-06T06:15Z',
    endTime: '2024-01-06T06:21Z',
    classType: 'C4.0',
    sourceLocation: 'N01E11',
    activeRegionNum: 13536,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-06T08:12:00-CME-001',
      },
    ],
    submissionTime: '2024-01-06T23:45Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28514/-1',
  },
  {
    flrID: '2024-01-10T12:39:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-10T12:39Z',
    peakTime: '2024-01-10T12:55Z',
    endTime: '2024-01-10T13:05Z',
    classType: 'M1.4',
    sourceLocation: 'S20E90',
    activeRegionNum: 13549,
    note: 'At the time of the flare, this flare was associated with an unnumbered active region beyond the SE limb. This region was later numbered AR 13549 on 2024-01-12.',
    linkedEvents: null,
    submissionTime: '2024-01-16T15:45Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28538/-1',
  },
  {
    flrID: '2024-01-10T18:56:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-10T18:56Z',
    peakTime: '2024-01-10T19:07Z',
    endTime: '2024-01-10T19:16Z',
    classType: 'C6.5',
    sourceLocation: 'N10W52',
    activeRegionNum: 13536,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-10T19:36:00-CME-001',
      },
    ],
    submissionTime: '2024-01-10T23:26Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28556/-1',
  },
  {
    flrID: '2024-01-10T20:28:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-10T20:28Z',
    peakTime: '2024-01-10T20:41Z',
    endTime: '2024-01-10T21:00Z',
    classType: 'C5.6',
    sourceLocation: 'N12E90',
    activeRegionNum: null,
    note: 'Source is beyond the eastern limb.',
    linkedEvents: [
      {
        activityID: '2024-01-10T21:09:00-CME-001',
      },
    ],
    submissionTime: '2024-01-11T21:22Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28576/-1',
  },
  {
    flrID: '2024-01-10T23:18:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-10T23:18Z',
    peakTime: '2024-01-10T23:28Z',
    endTime: '2024-01-10T23:35Z',
    classType: 'M1.9',
    sourceLocation: 'N22W80',
    activeRegionNum: 13538,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-01-10T23:45Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28559/-1',
  },
  {
    flrID: '2024-01-11T12:44:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-11T12:44Z',
    peakTime: '2024-01-11T12:51Z',
    endTime: '2024-01-11T12:55Z',
    classType: 'M1.3',
    sourceLocation: 'N19W88',
    activeRegionNum: 13538,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-01-11T13:22Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28560/-1',
  },
  {
    flrID: '2024-01-11T17:49:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-11T17:49Z',
    peakTime: '2024-01-11T17:52Z',
    endTime: '2024-01-11T17:59Z',
    classType: 'M1.5',
    sourceLocation: 'N09W55',
    activeRegionNum: 13539,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-01-11T18:03Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28561/-1',
  },
  {
    flrID: '2024-01-11T19:08:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-11T19:08Z',
    peakTime: '2024-01-11T19:23Z',
    endTime: '2024-01-11T19:49Z',
    classType: 'M1.2',
    sourceLocation: 'N19W90',
    activeRegionNum: 13538,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-01-11T20:00Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28562/-1',
  },
  {
    flrID: '2024-01-12T02:55:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-12T02:55Z',
    peakTime: '2024-01-12T02:58Z',
    endTime: '2024-01-12T03:02Z',
    classType: 'M1.0',
    sourceLocation: 'N18E18',
    activeRegionNum: 13547,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-01-12T14:59Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28583/-1',
  },
  {
    flrID: '2024-01-14T11:30:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-14T11:30Z',
    peakTime: '2024-01-14T12:06Z',
    endTime: '2024-01-14T12:26Z',
    classType: 'C9.6',
    sourceLocation: 'N01W90',
    activeRegionNum: 13543,
    note: 'Flare appears to occur over the west limb slightly, in a range W90-W110 as we see most of it peeking around the limb. Potentially associated with AR 3536 or 3543 which recently rotated off the disk, but AR 3543 is believed to be the most likely candidate.',
    linkedEvents: [
      {
        activityID: '2024-01-14T12:00:00-CME-001',
      },
    ],
    submissionTime: '2024-01-16T16:38Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28610/-1',
  },
  {
    flrID: '2024-01-20T08:35:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-20T08:35Z',
    peakTime: '2024-01-20T09:34Z',
    endTime: '2024-01-20T10:32Z',
    classType: 'C3.5',
    sourceLocation: 'S15E20',
    activeRegionNum: null,
    note: 'Associated with post-eruptive arcades. Situated between Active Region 13557 (S13E29) and Active Region 13555 (S11E10).',
    linkedEvents: [
      {
        activityID: '2024-01-20T09:24:00-CME-001',
      },
      {
        activityID: '2024-01-22T13:00:00-SEP-001',
      },
      {
        activityID: '2024-01-22T16:48:00-SEP-001',
      },
    ],
    submissionTime: '2024-01-20T16:34Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28653/-1',
  },
  {
    flrID: '2024-01-21T00:03:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-21T00:03Z',
    peakTime: '2024-01-21T00:27Z',
    endTime: '2024-01-21T00:35Z',
    classType: 'C4.0',
    sourceLocation: 'N20E41',
    activeRegionNum: 13559,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-21T00:36:00-CME-001',
      },
      {
        activityID: '2024-01-22T13:00:00-SEP-001',
      },
      {
        activityID: '2024-01-22T13:42:00-SEP-001',
      },
      {
        activityID: '2024-01-22T16:48:00-SEP-001',
      },
    ],
    submissionTime: '2024-01-21T16:08Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28667/-1',
  },
  {
    flrID: '2024-01-21T00:35:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-21T00:35Z',
    peakTime: '2024-01-21T00:41Z',
    endTime: '2024-01-21T00:55Z',
    classType: 'C5.3',
    sourceLocation: 'N28E42',
    activeRegionNum: 13559,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-21T00:36:00-CME-001',
      },
      {
        activityID: '2024-01-22T13:00:00-SEP-001',
      },
      {
        activityID: '2024-01-22T13:42:00-SEP-001',
      },
      {
        activityID: '2024-01-22T16:48:00-SEP-001',
      },
    ],
    submissionTime: '2024-01-21T16:09Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28668/-1',
  },
  {
    flrID: '2024-01-22T06:09:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-22T06:09Z',
    peakTime: '2024-01-22T06:22Z',
    endTime: '2024-01-22T06:30Z',
    classType: 'M1.5',
    sourceLocation: 'N27E27',
    activeRegionNum: 13559,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-22T13:00:00-SEP-001',
      },
      {
        activityID: '2024-01-22T13:42:00-SEP-001',
      },
      {
        activityID: '2024-01-22T16:48:00-SEP-001',
      },
    ],
    submissionTime: '2024-01-22T13:19Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28682/-1',
  },
  {
    flrID: '2024-01-22T19:13:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-22T19:13Z',
    peakTime: '2024-01-22T19:24Z',
    endTime: '2024-01-22T19:28Z',
    classType: 'M1.1',
    sourceLocation: 'N25E14',
    activeRegionNum: 13559,
    note: 'Simultaneous flaring from AR 3561 (approx. S16W28) at the time of this flare/',
    linkedEvents: null,
    submissionTime: '2024-01-22T20:04Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28696/-1',
  },
  {
    flrID: '2024-01-22T19:28:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-22T19:28Z',
    peakTime: '2024-01-22T19:32Z',
    endTime: '2024-01-22T19:36Z',
    classType: 'M1.2',
    sourceLocation: 'N25E14',
    activeRegionNum: 13559,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-01-22T19:55Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28695/-1',
  },
  {
    flrID: '2024-01-22T19:43:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-22T19:43Z',
    peakTime: '2024-01-22T19:47Z',
    endTime: '2024-01-22T19:53Z',
    classType: 'M2.0',
    sourceLocation: 'S17W27',
    activeRegionNum: 13561,
    note: 'Simultaneous flaring is observed from AR 3559 (approximately N27E15).',
    linkedEvents: null,
    submissionTime: '2024-01-22T20:07Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28697/-1',
  },
  {
    flrID: '2024-01-22T21:14:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-22T21:14Z',
    peakTime: '2024-01-22T21:21Z',
    endTime: '2024-01-22T21:32Z',
    classType: 'M3.4',
    sourceLocation: 'S18W30',
    activeRegionNum: 13561,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-22T22:36:00-CME-001',
      },
    ],
    submissionTime: '2024-01-23T13:43Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28713/-1',
  },
  {
    flrID: '2024-01-22T21:36:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-22T21:36Z',
    peakTime: '2024-01-22T21:43Z',
    endTime: '2024-01-22T21:58Z',
    classType: 'M1.6',
    sourceLocation: 'S18W30',
    activeRegionNum: 13561,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-22T22:36:00-CME-001',
      },
    ],
    submissionTime: '2024-01-23T13:46Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28714/-1',
  },
  {
    flrID: '2024-01-22T22:19:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-22T22:19Z',
    peakTime: '2024-01-22T22:22Z',
    endTime: '2024-01-22T22:26Z',
    classType: 'M2.1',
    sourceLocation: 'S19W30',
    activeRegionNum: 13561,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-01-23T13:49Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28715/-1',
  },
  {
    flrID: '2024-01-23T03:09:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-23T03:09Z',
    peakTime: '2024-01-23T03:31Z',
    endTime: '2024-01-23T03:38Z',
    classType: 'M5.1',
    sourceLocation: 'N29E18',
    activeRegionNum: 13559,
    note: 'Simultaneous flaring at Active Region 13561 (S19W31), but Active Region 13559 is clearly the primary contributor to this flare.',
    linkedEvents: [
      {
        activityID: '2024-01-23T03:48:00-CME-001',
      },
      {
        activityID: '2024-01-23T04:12:00-CME-001',
      },
    ],
    submissionTime: '2024-01-24T00:27Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28710/-1',
  },
  {
    flrID: '2024-01-23T06:45:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-23T06:45Z',
    peakTime: '2024-01-23T07:00Z',
    endTime: '2024-01-23T07:14Z',
    classType: 'C9.6',
    sourceLocation: 'S17W35',
    activeRegionNum: 13561,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-23T07:24:00-CME-001',
      },
    ],
    submissionTime: '2024-01-24T17:15Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28764/-1',
  },
  {
    flrID: '2024-01-23T07:52:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-23T07:52Z',
    peakTime: '2024-01-23T08:11Z',
    endTime: '2024-01-23T08:18Z',
    classType: 'M2.4',
    sourceLocation: 'S18W38',
    activeRegionNum: 13561,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-01-23T13:52Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28716/-1',
  },
  {
    flrID: '2024-01-23T08:18:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-23T08:18Z',
    peakTime: '2024-01-23T08:22Z',
    endTime: '2024-01-23T08:26Z',
    classType: 'M2.3',
    sourceLocation: 'S18W40',
    activeRegionNum: 13561,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-01-23T13:56Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28717/-1',
  },
  {
    flrID: '2024-01-23T09:17:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-23T09:17Z',
    peakTime: '2024-01-23T09:30Z',
    endTime: '2024-01-23T09:36Z',
    classType: 'C6.2',
    sourceLocation: 'N30E16',
    activeRegionNum: 13559,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-23T09:48:00-CME-001',
      },
    ],
    submissionTime: '2024-01-24T00:20Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28744/-1',
  },
  {
    flrID: '2024-01-23T13:03:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-23T13:03Z',
    peakTime: '2024-01-23T13:08Z',
    endTime: '2024-01-23T13:13Z',
    classType: 'M1.0',
    sourceLocation: 'S18W38',
    activeRegionNum: 13561,
    note: 'Simultaneous flaring at Active Region 13559 (N30E12).',
    linkedEvents: [
      {
        activityID: '2024-01-23T13:36:00-CME-001',
      },
    ],
    submissionTime: '2024-01-23T14:03Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28718/-1',
  },
  {
    flrID: '2024-01-23T14:45:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-23T14:45Z',
    peakTime: '2024-01-23T14:59Z',
    endTime: '2024-01-23T15:05Z',
    classType: 'M1.3',
    sourceLocation: 'S18W42',
    activeRegionNum: 13561,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-01-23T15:27Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28719/-1',
  },
  {
    flrID: '2024-01-23T16:36:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-23T16:36Z',
    peakTime: '2024-01-23T16:40Z',
    endTime: '2024-01-23T16:47Z',
    classType: 'M4.3',
    sourceLocation: 'S17W39',
    activeRegionNum: 13561,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-23T17:36:00-CME-001',
      },
    ],
    submissionTime: '2024-01-23T17:11Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28721/-1',
  },
  {
    flrID: '2024-01-23T18:19:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-23T18:19Z',
    peakTime: '2024-01-23T18:28Z',
    endTime: '2024-01-23T18:35Z',
    classType: 'M1.0',
    sourceLocation: 'S17W43',
    activeRegionNum: 13561,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-01-23T18:47Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28722/-1',
  },
  {
    flrID: '2024-01-23T18:35:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-23T18:35Z',
    peakTime: '2024-01-23T18:44Z',
    endTime: '2024-01-23T18:49Z',
    classType: 'M1.1',
    sourceLocation: 'S16W43',
    activeRegionNum: 13561,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-01-23T18:56Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28723/-1',
  },
  {
    flrID: '2024-01-23T19:46:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-23T19:46Z',
    peakTime: '2024-01-23T19:52Z',
    endTime: '2024-01-23T19:57Z',
    classType: 'M1.0',
    sourceLocation: 'S17W42',
    activeRegionNum: 13561,
    note: 'First of two flares in a double peak, followed by 2024-01-23T19:57Z.',
    linkedEvents: null,
    submissionTime: '2024-01-23T20:16Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28728/-1',
  },
  {
    flrID: '2024-01-23T19:57:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-23T19:57Z',
    peakTime: '2024-01-23T20:01Z',
    endTime: '2024-01-23T20:05Z',
    classType: 'M1.0',
    sourceLocation: 'S17W44',
    activeRegionNum: 13561,
    note: 'Second of two flares in a double peak, preceded by 2024-01-23T19:46Z.',
    linkedEvents: null,
    submissionTime: '2024-01-23T20:16Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28729/-1',
  },
  {
    flrID: '2024-01-24T00:21:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-24T00:21Z',
    peakTime: '2024-01-24T00:38Z',
    endTime: '2024-01-24T00:43Z',
    classType: 'M1.0',
    sourceLocation: 'S17W43',
    activeRegionNum: 13561,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-01-24T13:10Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28755/-1',
  },
  {
    flrID: '2024-01-24T01:31:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-24T01:31Z',
    peakTime: '2024-01-24T01:40Z',
    endTime: '2024-01-24T01:53Z',
    classType: 'M2.6',
    sourceLocation: 'S16W48',
    activeRegionNum: 13561,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-24T01:36:00-CME-001',
      },
    ],
    submissionTime: '2024-01-24T13:12Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28756/-1',
  },
  {
    flrID: '2024-01-24T05:18:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-24T05:18Z',
    peakTime: '2024-01-24T05:43Z',
    endTime: '2024-01-24T06:00Z',
    classType: 'M1.4',
    sourceLocation: 'S16W51',
    activeRegionNum: 13561,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-01-24T13:15Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28757/-1',
  },
  {
    flrID: '2024-01-24T12:44:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-24T12:44Z',
    peakTime: '2024-01-24T12:57Z',
    endTime: '2024-01-24T13:14Z',
    classType: 'C6.8',
    sourceLocation: 'S18W52',
    activeRegionNum: 13561,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-24T13:36:00-CME-001',
      },
    ],
    submissionTime: '2024-01-24T20:53Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28778/-1',
  },
  {
    flrID: '2024-01-24T20:44:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-24T20:44Z',
    peakTime: '2024-01-24T20:58Z',
    endTime: '2024-01-24T21:11Z',
    classType: 'M1.3',
    sourceLocation: 'S18W60',
    activeRegionNum: 13561,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-24T22:24:00-CME-001',
      },
    ],
    submissionTime: '2024-01-25T14:04Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28781/-1',
  },
  {
    flrID: '2024-01-28T15:52:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-28T15:52Z',
    peakTime: '2024-01-28T16:00Z',
    endTime: '2024-01-28T16:22Z',
    classType: 'C3.0',
    sourceLocation: 'N30W55',
    activeRegionNum: 13559,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-28T16:24:00-CME-001',
      },
    ],
    submissionTime: '2024-01-28T21:13Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28830/-1',
  },
  {
    flrID: '2024-01-29T01:29:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-29T01:29Z',
    peakTime: '2024-01-29T01:40Z',
    endTime: '2024-01-29T01:52Z',
    classType: 'M1.2',
    sourceLocation: 'N30W61',
    activeRegionNum: 13559,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-29T02:00:00-CME-001',
      },
    ],
    submissionTime: '2024-01-29T02:44Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28833/-1',
  },
  {
    flrID: '2024-01-29T03:54:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-29T03:54Z',
    peakTime: '2024-01-29T04:38Z',
    endTime: '2024-01-29T05:15Z',
    classType: 'M6.8',
    sourceLocation: 'N25W70',
    activeRegionNum: 13559,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-29T04:38:00-CME-001',
      },
      {
        activityID: '2024-01-29T05:11:00-SEP-001',
      },
      {
        activityID: '2024-01-29T05:50:00-SEP-001',
      },
      {
        activityID: '2024-01-29T06:06:00-SEP-001',
      },
      {
        activityID: '2024-01-29T06:08:00-SEP-001',
      },
      {
        activityID: '2024-01-29T06:15:00-SEP-001',
      },
    ],
    submissionTime: '2024-01-29T05:45Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28834/-1',
  },
  {
    flrID: '2024-01-30T00:07:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-01-30T00:07Z',
    peakTime: '2024-01-30T00:16Z',
    endTime: '2024-01-30T00:22Z',
    classType: 'C1.9',
    sourceLocation: 'N31W78',
    activeRegionNum: 13559,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-01-30T00:24:00-CME-001',
      },
    ],
    submissionTime: '2024-01-30T14:00Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28881/-1',
  },
  {
    flrID: '2024-02-01T06:36:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-01T06:36Z',
    peakTime: '2024-02-01T07:43Z',
    endTime: '2024-02-01T08:48Z',
    classType: 'C3.0',
    sourceLocation: 'N20E05',
    activeRegionNum: null,
    note: 'Associated with a region of enhanced flux, but no numbered active region.',
    linkedEvents: [
      {
        activityID: '2024-02-01T08:00:00-CME-001',
      },
    ],
    submissionTime: '2024-02-01T14:07Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28928/-1',
  },
  {
    flrID: '2024-02-02T02:52:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-02T02:52Z',
    peakTime: '2024-02-02T03:01Z',
    endTime: '2024-02-02T03:05Z',
    classType: 'M1.1',
    sourceLocation: 'S18E60',
    activeRegionNum: 13571,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-02-02T04:17:00-CME-001',
      },
    ],
    submissionTime: '2024-02-02T12:37Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28942/-1',
  },
  {
    flrID: '2024-02-02T10:48:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-02T10:48Z',
    peakTime: '2024-02-02T10:57Z',
    endTime: '2024-02-02T11:03Z',
    classType: 'C5.6',
    sourceLocation: 'S19E56',
    activeRegionNum: 13571,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-02-02T11:24:00-CME-001',
      },
    ],
    submissionTime: '2024-02-03T22:09Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28969/-1',
  },
  {
    flrID: '2024-02-02T15:25:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-02T15:25Z',
    peakTime: '2024-02-02T15:34Z',
    endTime: '2024-02-02T15:39Z',
    classType: 'C3.0',
    sourceLocation: 'S19E53',
    activeRegionNum: 13571,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-02-02T17:09:00-CME-001',
      },
    ],
    submissionTime: '2024-02-03T21:54Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28965/-1',
  },
  {
    flrID: '2024-02-02T16:22:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-02T16:22Z',
    peakTime: '2024-02-02T16:32Z',
    endTime: '2024-02-02T16:38Z',
    classType: 'C3.1',
    sourceLocation: 'S20E55',
    activeRegionNum: 13571,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-02-02T17:09:00-CME-001',
      },
    ],
    submissionTime: '2024-02-03T21:54Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28966/-1',
  },
  {
    flrID: '2024-02-04T11:40:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-04T11:40Z',
    peakTime: '2024-02-04T11:53Z',
    endTime: '2024-02-04T12:08Z',
    classType: 'M1.4',
    sourceLocation: 'S17E79',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-04T14:34Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28978/-1',
  },
  {
    flrID: '2024-02-04T16:22:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-04T16:22Z',
    peakTime: '2024-02-04T16:38Z',
    endTime: '2024-02-04T16:46Z',
    classType: 'M1.5',
    sourceLocation: 'S17E75',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-04T17:50Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28981/-1',
  },
  {
    flrID: '2024-02-04T17:05:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-04T17:05Z',
    peakTime: '2024-02-04T17:12Z',
    endTime: '2024-02-04T17:19Z',
    classType: 'M1.3',
    sourceLocation: 'S17E74',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-04T17:52Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28982/-1',
  },
  {
    flrID: '2024-02-04T18:16:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-04T18:16Z',
    peakTime: '2024-02-04T18:29Z',
    endTime: '2024-02-04T18:43Z',
    classType: 'M1.1',
    sourceLocation: 'S18E73',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-04T19:10Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28983/-1',
  },
  {
    flrID: '2024-02-04T20:52:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-04T20:52Z',
    peakTime: '2024-02-04T20:57Z',
    endTime: '2024-02-04T21:01Z',
    classType: 'M1.2',
    sourceLocation: 'S19E85',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-04T21:27Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28984/-1',
  },
  {
    flrID: '2024-02-04T22:20:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-04T22:20Z',
    peakTime: '2024-02-04T22:28Z',
    endTime: '2024-02-04T22:34Z',
    classType: 'M2.1',
    sourceLocation: 'S14E87',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-04T22:45Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28985/-1',
  },
  {
    flrID: '2024-02-04T22:34:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-04T22:34Z',
    peakTime: '2024-02-04T22:37Z',
    endTime: '2024-02-04T22:42Z',
    classType: 'M2.7',
    sourceLocation: 'S14E86',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-04T22:49Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28986/-1',
  },
  {
    flrID: '2024-02-05T04:13:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-05T04:13Z',
    peakTime: '2024-02-05T04:28Z',
    endTime: '2024-02-05T04:44Z',
    classType: 'M2.1',
    sourceLocation: 'S16E73',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-05T14:45Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28991/-1',
  },
  {
    flrID: '2024-02-05T06:10:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-05T06:10Z',
    peakTime: '2024-02-05T06:22Z',
    endTime: '2024-02-05T06:26Z',
    classType: 'M1.4',
    sourceLocation: 'S21E75',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-02-05T07:48:00-CME-001',
      },
    ],
    submissionTime: '2024-02-05T13:44Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28987/-1',
  },
  {
    flrID: '2024-02-06T02:15:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-06T02:15Z',
    peakTime: '2024-02-06T02:28Z',
    endTime: '2024-02-06T02:37Z',
    classType: 'M2.2',
    sourceLocation: 'S34W65',
    activeRegionNum: 13575,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-02-06T02:53:00-CME-001',
      },
      {
        activityID: '2024-02-06T05:25:00-SEP-001',
      },
      {
        activityID: '2024-02-06T07:28:00-SEP-001',
      },
    ],
    submissionTime: '2024-02-06T02:53Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28997/-1',
  },
  {
    flrID: '2024-02-06T02:37:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-06T02:37Z',
    peakTime: '2024-02-06T03:12Z',
    endTime: '2024-02-06T03:37Z',
    classType: 'M4.2',
    sourceLocation: 'S34W65',
    activeRegionNum: 13575,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-02-06T02:53:00-CME-001',
      },
      {
        activityID: '2024-02-06T05:25:00-SEP-001',
      },
      {
        activityID: '2024-02-06T07:28:00-SEP-001',
      },
    ],
    submissionTime: '2024-02-06T03:43Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/28998/-1',
  },
  {
    flrID: '2024-02-06T18:38:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-06T18:38Z',
    peakTime: '2024-02-06T18:49Z',
    endTime: '2024-02-06T19:07Z',
    classType: 'M1.3',
    sourceLocation: 'S36W72',
    activeRegionNum: 13575,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-02-06T19:12:00-CME-001',
      },
    ],
    submissionTime: '2024-02-06T20:13Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29014/-1',
  },
  {
    flrID: '2024-02-07T03:04:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-07T03:04Z',
    peakTime: '2024-02-07T03:31Z',
    endTime: '2024-02-07T04:11Z',
    classType: 'M5.1',
    sourceLocation: 'S36W80',
    activeRegionNum: 13575,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-02-07T03:36:00-CME-001',
      },
    ],
    submissionTime: '2024-02-07T12:56Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29025/-1',
  },
  {
    flrID: '2024-02-07T17:41:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-07T17:41Z',
    peakTime: '2024-02-07T18:05Z',
    endTime: '2024-02-07T18:35Z',
    classType: 'M1.3',
    sourceLocation: 'S15E38',
    activeRegionNum: 13576,
    note: 'Another peak was observed, at M1.2 class, at 2024-02-07T18:19Z.',
    linkedEvents: null,
    submissionTime: '2024-02-07T19:54Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29040/-1',
  },
  {
    flrID: '2024-02-08T12:41:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-08T12:41Z',
    peakTime: '2024-02-08T13:12Z',
    endTime: '2024-02-08T13:37Z',
    classType: 'M3.4',
    sourceLocation: 'S17E27',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-08T14:07Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29049/-1',
  },
  {
    flrID: '2024-02-08T14:11:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-08T14:11Z',
    peakTime: '2024-02-08T14:18Z',
    endTime: '2024-02-08T14:25Z',
    classType: 'M1.2',
    sourceLocation: 'S13W90',
    activeRegionNum: 13564,
    note: 'Smaller flare from the west limb, riding on the back of an M3 class flare from a central AR 3576',
    linkedEvents: [
      {
        activityID: '2024-02-08T15:23:00-CME-001',
      },
    ],
    submissionTime: '2024-02-08T14:42Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29050/-1',
  },
  {
    flrID: '2024-02-08T15:17:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-08T15:17Z',
    peakTime: '2024-02-08T15:23Z',
    endTime: '2024-02-08T15:27Z',
    classType: 'M1.8',
    sourceLocation: 'S16E24',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-09T19:04Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29051/-1',
  },
  {
    flrID: '2024-02-08T16:12:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-08T16:12Z',
    peakTime: '2024-02-08T16:21Z',
    endTime: '2024-02-08T16:28Z',
    classType: 'C6.1',
    sourceLocation: 'S13W90',
    activeRegionNum: 13564,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-02-08T16:48:00-CME-001',
      },
    ],
    submissionTime: '2024-02-08T20:52Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29056/-1',
  },
  {
    flrID: '2024-02-08T18:56:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-08T18:56Z',
    peakTime: '2024-02-08T19:02Z',
    endTime: '2024-02-08T19:06Z',
    classType: 'M1.3',
    sourceLocation: 'S15E22',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-08T19:36Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29053/-1',
  },
  {
    flrID: '2024-02-08T23:16:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-08T23:16Z',
    peakTime: '2024-02-08T23:55Z',
    endTime: '2024-02-09T00:36Z',
    classType: 'M3.9',
    sourceLocation: 'S36W100',
    activeRegionNum: 13575,
    note: 'Seen beyond the SW limb',
    linkedEvents: [
      {
        activityID: '2024-02-08T23:48:00-CME-001',
      },
    ],
    submissionTime: '2024-02-09T02:17Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29060/-1',
  },
  {
    flrID: '2024-02-09T00:36:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-09T00:36Z',
    peakTime: '2024-02-09T00:41Z',
    endTime: '2024-02-09T00:45Z',
    classType: 'M3.1',
    sourceLocation: 'S16E16',
    activeRegionNum: 13576,
    note: 'Simultaneous flaring from AR3576 (S16E16) & AR3575 (S36, beyond SW limb).',
    linkedEvents: null,
    submissionTime: '2024-02-09T03:05Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29061/-1',
  },
  {
    flrID: '2024-02-09T12:53:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-09T12:53Z',
    peakTime: '2024-02-09T13:14Z',
    endTime: '2024-02-09T13:32Z',
    classType: 'X3.3',
    sourceLocation: 'S37W110',
    activeRegionNum: 13575,
    note: 'Occulted flare from behind the limb. The earlier identification of longitude sent in notification was too low, W110 is more correct.',
    linkedEvents: [
      {
        activityID: '2024-02-09T13:23:00-CME-001',
      },
      {
        activityID: '2024-02-09T15:09:00-SEP-001',
      },
      {
        activityID: '2024-02-09T15:30:00-SEP-001',
      },
      {
        activityID: '2024-02-09T15:34:00-SEP-001',
      },
      {
        activityID: '2024-02-09T15:37:00-SEP-001',
      },
      {
        activityID: '2024-02-09T15:52:00-SEP-001',
      },
      {
        activityID: '2024-02-09T15:59:00-SEP-001',
      },
      {
        activityID: '2024-02-09T16:44:00-SEP-001',
      },
      {
        activityID: '2024-02-09T16:45:00-SEP-001',
      },
    ],
    submissionTime: '2024-02-12T15:10Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29062/-1',
  },
  {
    flrID: '2024-02-09T17:54:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-09T17:54Z',
    peakTime: '2024-02-09T18:00Z',
    endTime: '2024-02-09T18:07Z',
    classType: 'M1.2',
    sourceLocation: 'S16E07',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-09T18:15Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29091/-1',
  },
  {
    flrID: '2024-02-10T00:42:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-10T00:42Z',
    peakTime: '2024-02-10T00:51Z',
    endTime: '2024-02-10T01:00Z',
    classType: 'M1.5',
    sourceLocation: 'S16E04',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-10T01:15Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29103/-1',
  },
  {
    flrID: '2024-02-10T03:04:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-10T03:04Z',
    peakTime: '2024-02-10T03:54Z',
    endTime: '2024-02-10T04:29Z',
    classType: 'M3.4',
    sourceLocation: 'S15E90',
    activeRegionNum: 13584,
    note: 'AR 13584 was numbered on 2024-02-11. This flare may potentially be occulted due to proximity to the limb.',
    linkedEvents: [
      {
        activityID: '2024-02-10T03:48:00-CME-001',
      },
    ],
    submissionTime: '2024-02-13T17:54Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29106/-1',
  },
  {
    flrID: '2024-02-10T22:56:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-10T22:56Z',
    peakTime: '2024-02-10T23:07Z',
    endTime: '2024-02-10T23:14Z',
    classType: 'M9.0',
    sourceLocation: 'S12W13',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-02-10T23:36:00-CME-001',
      },
    ],
    submissionTime: '2024-02-10T23:36Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29127/-1',
  },
  {
    flrID: '2024-02-11T22:35:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-11T22:35Z',
    peakTime: '2024-02-11T22:45Z',
    endTime: '2024-02-11T22:50Z',
    classType: 'M1.0',
    sourceLocation: 'N10E90',
    activeRegionNum: 13585,
    note: 'This AR was numbered on 2024-02-14.',
    linkedEvents: null,
    submissionTime: '2024-02-14T14:55Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29145/-1',
  },
  {
    flrID: '2024-02-12T03:23:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-12T03:23Z',
    peakTime: '2024-02-12T03:48Z',
    endTime: '2024-02-12T03:53Z',
    classType: 'M6.5',
    sourceLocation: 'S16W25',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-02-12T05:12:00-CME-001',
      },
    ],
    submissionTime: '2024-02-12T12:52Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29152/-1',
  },
  {
    flrID: '2024-02-12T12:50:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-12T12:50Z',
    peakTime: '2024-02-12T13:08Z',
    endTime: '2024-02-12T13:21Z',
    classType: 'M1.1',
    sourceLocation: 'S16W30',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-12T13:57Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29162/-1',
  },
  {
    flrID: '2024-02-12T15:31:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-12T15:31Z',
    peakTime: '2024-02-12T15:48Z',
    endTime: '2024-02-12T16:03Z',
    classType: 'M1.4',
    sourceLocation: 'S16W30',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-12T18:38Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29172/-1',
  },
  {
    flrID: '2024-02-12T20:35:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-12T20:35Z',
    peakTime: '2024-02-12T21:17Z',
    endTime: '2024-02-12T21:51Z',
    classType: 'M2.6',
    sourceLocation: 'N26E90',
    activeRegionNum: 13586,
    note: 'Occluded flare from behind the NE limb caused by rising post-eruptive arcades. AR was numbered on 2024-02-14.',
    linkedEvents: [
      {
        activityID: '2024-02-12T22:18:00-CME-001',
      },
    ],
    submissionTime: '2024-02-14T21:08Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29201/-1',
  },
  {
    flrID: '2024-02-13T07:28:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-13T07:28Z',
    peakTime: '2024-02-13T07:59Z',
    endTime: '2024-02-13T08:16Z',
    classType: 'C5.0',
    sourceLocation: 'N23E90',
    activeRegionNum: null,
    note: 'Occulted flare from behind the NE limb.',
    linkedEvents: [
      {
        activityID: '2024-02-13T08:09:00-CME-001',
      },
    ],
    submissionTime: '2024-02-13T19:26Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29213/-1',
  },
  {
    flrID: '2024-02-14T03:02:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-14T03:02Z',
    peakTime: '2024-02-14T03:10Z',
    endTime: '2024-02-14T03:23Z',
    classType: 'M1.0',
    sourceLocation: 'N07W26',
    activeRegionNum: 13582,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-14T12:54Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29218/-1',
  },
  {
    flrID: '2024-02-14T07:26:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-14T07:26Z',
    peakTime: '2024-02-14T07:35Z',
    endTime: '2024-02-14T07:42Z',
    classType: 'M1.0',
    sourceLocation: 'S17W55',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-14T12:55Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29219/-1',
  },
  {
    flrID: '2024-02-15T16:50:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-15T16:50Z',
    peakTime: '2024-02-15T17:07Z',
    endTime: '2024-02-15T17:21Z',
    classType: 'M1.8',
    sourceLocation: 'S15W80',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-02-15T17:36:00-CME-001',
      },
    ],
    submissionTime: '2024-02-15T18:33Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29250/-1',
  },
  {
    flrID: '2024-02-16T06:42:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-16T06:42Z',
    peakTime: '2024-02-16T06:53Z',
    endTime: '2024-02-16T06:58Z',
    classType: 'X2.5',
    sourceLocation: 'S19W85',
    activeRegionNum: 13576,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-02-16T07:23:00-CME-001',
      },
    ],
    submissionTime: '2024-02-16T13:02Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29255/-1',
  },
  {
    flrID: '2024-02-16T16:15:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-16T16:15Z',
    peakTime: '2024-02-16T16:36Z',
    endTime: '2024-02-16T16:56Z',
    classType: 'C6.1',
    sourceLocation: 'N30E56',
    activeRegionNum: 13586,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-02-16T17:36:00-CME-001',
      },
    ],
    submissionTime: '2024-02-16T20:38Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29276/-1',
  },
  {
    flrID: '2024-02-16T21:57:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-16T21:57Z',
    peakTime: '2024-02-16T22:09Z',
    endTime: '2024-02-16T22:16Z',
    classType: 'M3.0',
    sourceLocation: 'S16W94',
    activeRegionNum: 13576,
    note: 'Flare partially occulted by the limb, location derived from current position of AR 3576 just beyond the SW limb.',
    linkedEvents: null,
    submissionTime: '2024-02-16T22:31Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29279/-1',
  },
  {
    flrID: '2024-02-19T23:00:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-19T23:00Z',
    peakTime: '2024-02-19T23:39Z',
    endTime: '2024-02-20T01:08Z',
    classType: 'C3.8',
    sourceLocation: 'N12W80',
    activeRegionNum: 13583,
    note: 'Flaring due to a post-eruptive arcade, which is observed in SDO AIA 131 to have a left-hand footpoint at W70 and a right-hand footpoint that appears to reach around the western limb, possibly to about W100.',
    linkedEvents: [
      {
        activityID: '2024-02-19T23:24:00-CME-001',
      },
    ],
    submissionTime: '2024-02-20T20:37Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29310/-1',
  },
  {
    flrID: '2024-02-21T15:39:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-21T15:39Z',
    peakTime: '2024-02-21T16:02Z',
    endTime: '2024-02-21T16:42Z',
    classType: 'C4.1',
    sourceLocation: 'S40E90',
    activeRegionNum: null,
    note: 'This flare is associated with an eruption on the SE limb, which is currently suspected to be old Active Region 13575 (S37, rotated off the disk at 2024-02-07T22:00Z).',
    linkedEvents: [
      {
        activityID: '2024-02-21T16:12:00-CME-001',
      },
    ],
    submissionTime: '2024-02-21T20:44Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29329/-1',
  },
  {
    flrID: '2024-02-21T22:52:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-21T22:52Z',
    peakTime: '2024-02-21T23:07Z',
    endTime: '2024-02-21T23:14Z',
    classType: 'X1.8',
    sourceLocation: 'N17E38',
    activeRegionNum: 13590,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-21T23:20Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29331/-1',
  },
  {
    flrID: '2024-02-21T23:58:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-21T23:58Z',
    peakTime: '2024-02-22T00:14Z',
    endTime: '2024-02-22T00:31Z',
    classType: 'M1.5',
    sourceLocation: 'S36E90',
    activeRegionNum: 13591,
    note: 'Occulted flare from active region just behind the SE limb (likely the old AR 3575).',
    linkedEvents: [
      {
        activityID: '2024-02-22T00:24:00-CME-001',
      },
    ],
    submissionTime: '2024-02-23T14:36Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29337/-1',
  },
  {
    flrID: '2024-02-22T06:17:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-22T06:17Z',
    peakTime: '2024-02-22T06:32Z',
    endTime: '2024-02-22T06:40Z',
    classType: 'X1.7',
    sourceLocation: 'N17E34',
    activeRegionNum: 13590,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-22T13:10Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29334/-1',
  },
  {
    flrID: '2024-02-22T16:17:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-22T16:17Z',
    peakTime: '2024-02-22T16:29Z',
    endTime: '2024-02-22T16:38Z',
    classType: 'C9.4',
    sourceLocation: 'N05E90',
    activeRegionNum: null,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-02-22T17:00:00-CME-001',
      },
    ],
    submissionTime: '2024-02-23T17:53Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29358/-1',
  },
  {
    flrID: '2024-02-22T20:29:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-22T20:29Z',
    peakTime: '2024-02-22T20:46Z',
    endTime: '2024-02-22T21:03Z',
    classType: 'M4.8',
    sourceLocation: 'N17E26',
    activeRegionNum: 13590,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-22T21:10Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29348/-1',
  },
  {
    flrID: '2024-02-22T22:08:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-22T22:08Z',
    peakTime: '2024-02-22T22:34Z',
    endTime: '2024-02-22T22:43Z',
    classType: 'X6.3',
    sourceLocation: 'N17E26',
    activeRegionNum: 13590,
    note: 'Data for this event was provided by GOES-18. A data gap in GOES-16 was observed from 2024-02-22T22:00Z to 2024-02-23T00:00Z.',
    linkedEvents: null,
    submissionTime: '2024-02-23T00:58Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29349/-1',
  },
  {
    flrID: '2024-02-23T13:12:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-23T13:12Z',
    peakTime: '2024-02-23T13:28Z',
    endTime: '2024-02-23T13:54Z',
    classType: 'M1.0',
    sourceLocation: 'N17E17',
    activeRegionNum: 13590,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-23T16:03Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29352/-1',
  },
  {
    flrID: '2024-02-23T15:41:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-23T15:41Z',
    peakTime: '2024-02-23T15:53Z',
    endTime: '2024-02-23T16:06Z',
    classType: 'M1.4',
    sourceLocation: 'N17E16',
    activeRegionNum: 13590,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-23T16:21Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29353/-1',
  },
  {
    flrID: '2024-02-23T16:12:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-23T16:12Z',
    peakTime: '2024-02-23T16:20Z',
    endTime: '2024-02-23T16:37Z',
    classType: 'M1.0',
    sourceLocation: 'N17E15',
    activeRegionNum: 13590,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-23T20:08Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29361/-1',
  },
  {
    flrID: '2024-02-23T17:26:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-23T17:26Z',
    peakTime: '2024-02-23T17:47Z',
    endTime: '2024-02-23T18:07Z',
    classType: 'M2.6',
    sourceLocation: 'N17E15',
    activeRegionNum: 13590,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-26T15:36Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29359/-1',
  },
  {
    flrID: '2024-02-24T06:21:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-24T06:21Z',
    peakTime: '2024-02-24T06:34Z',
    endTime: '2024-02-24T06:44Z',
    classType: 'M4.5',
    sourceLocation: 'N18E09',
    activeRegionNum: 13590,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-24T14:21Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29362/-1',
  },
  {
    flrID: '2024-02-24T10:32:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-24T10:32Z',
    peakTime: '2024-02-24T10:57Z',
    endTime: '2024-02-24T11:03Z',
    classType: 'M2.2',
    sourceLocation: 'N12E05',
    activeRegionNum: 13590,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-24T14:24Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29363/-1',
  },
  {
    flrID: '2024-02-24T11:03:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-24T11:03Z',
    peakTime: '2024-02-24T11:18Z',
    endTime: '2024-02-24T11:25Z',
    classType: 'M3.6',
    sourceLocation: 'N18E05',
    activeRegionNum: 13590,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-24T14:25Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29364/-1',
  },
  {
    flrID: '2024-02-24T11:54:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-24T11:54Z',
    peakTime: '2024-02-24T11:59Z',
    endTime: '2024-02-24T12:04Z',
    classType: 'M1.0',
    sourceLocation: 'N18E20',
    activeRegionNum: 13590,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-02-24T14:27Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29365/-1',
  },
  {
    flrID: '2024-02-25T16:47:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-25T16:47Z',
    peakTime: '2024-02-25T17:22Z',
    endTime: '2024-02-25T17:47Z',
    classType: 'M2.0',
    sourceLocation: 'N18W10',
    activeRegionNum: 13590,
    note: 'Eruption with dimming visible in SDO AIA 193.',
    linkedEvents: null,
    submissionTime: '2024-02-25T20:24Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29376/-1',
  },
  {
    flrID: '2024-02-28T08:56:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-28T08:56Z',
    peakTime: '2024-02-28T09:09Z',
    endTime: '2024-02-28T09:27Z',
    classType: 'C5.1',
    sourceLocation: 'S16E31',
    activeRegionNum: null,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-02-28T09:24:00-CME-001',
      },
    ],
    submissionTime: '2024-02-28T17:01Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29395/-1',
  },
  {
    flrID: '2024-02-28T16:24:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-02-28T16:24Z',
    peakTime: '2024-02-28T18:54Z',
    endTime: '2024-02-28T21:15Z',
    classType: 'M1.5',
    sourceLocation: 'N19W59',
    activeRegionNum: 13590,
    note: 'Long duration flare',
    linkedEvents: [
      {
        activityID: '2024-02-28T17:48:00-CME-001',
      },
    ],
    submissionTime: '2024-02-29T14:21Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29402/-1',
  },
  {
    flrID: '2024-03-07T22:02:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-07T22:02Z',
    peakTime: '2024-03-07T22:33Z',
    endTime: '2024-03-07T23:24Z',
    classType: 'C3.5',
    sourceLocation: 'N17W90',
    activeRegionNum: null,
    note: 'Brightening is seen in SDO AIA 131 on or just beyond the NW limb at about N17. This brightening simultaneously occurs with opening field lines and ejecta which are also observed just beyond the NW limb at abut N17 in SDO AIA 131 starting at 2024-03-07T22:09Z.',
    linkedEvents: [
      {
        activityID: '2024-03-07T22:36:00-CME-001',
      },
    ],
    submissionTime: '2024-03-08T19:01Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29506/-1',
  },
  {
    flrID: '2024-03-08T21:18:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-08T21:18Z',
    peakTime: '2024-03-08T21:26Z',
    endTime: '2024-03-08T21:31Z',
    classType: 'M1.3',
    sourceLocation: 'S13W14',
    activeRegionNum: 13599,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-08T21:43Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29517/-1',
  },
  {
    flrID: '2024-03-10T12:00:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-S: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-10T12:00Z',
    peakTime: '2024-03-10T12:13Z',
    endTime: '2024-03-10T12:20Z',
    classType: 'M7.4',
    sourceLocation: 'S13W35',
    activeRegionNum: 13599,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-03-10T12:48:00-CME-001',
      },
    ],
    submissionTime: '2024-03-10T13:01Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29523/-1',
  },
  {
    flrID: '2024-03-12T10:06:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-12T10:06Z',
    peakTime: '2024-03-12T10:18Z',
    endTime: '2024-03-12T10:26Z',
    classType: 'C3.3',
    sourceLocation: 'S19E90',
    activeRegionNum: null,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-03-12T10:55:00-CME-001',
      },
    ],
    submissionTime: '2024-03-12T16:50Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29562/-1',
  },
  {
    flrID: '2024-03-14T05:52:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-14T05:52Z',
    peakTime: '2024-03-14T06:04Z',
    endTime: '2024-03-14T06:11Z',
    classType: 'M1.0',
    sourceLocation: 'S13W85',
    activeRegionNum: 13599,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-14T12:17Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29578/-1',
  },
  {
    flrID: '2024-03-15T02:00:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-15T02:00Z',
    peakTime: '2024-03-15T03:57Z',
    endTime: '2024-03-15T04:35Z',
    classType: 'C4.9',
    sourceLocation: 'S13W90',
    activeRegionNum: 13599,
    note: 'Flare associated with high rising post-eruptive arcades, likely from an eruption in Active Region 3599 behind the limb (at longitude ~96 degrees)',
    linkedEvents: [
      {
        activityID: '2024-03-15T02:10:00-CME-001',
      },
    ],
    submissionTime: '2024-03-20T12:03Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29667/-1',
  },
  {
    flrID: '2024-03-15T05:32:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-15T05:32Z',
    peakTime: '2024-03-15T06:10Z',
    endTime: '2024-03-15T06:59Z',
    classType: 'C6.0',
    sourceLocation: 'S13W97',
    activeRegionNum: 13599,
    note: 'Associated with post-eruptive arcades and other eruptive activity from the SW limb.',
    linkedEvents: [
      {
        activityID: '2024-03-15T06:13:00-CME-001',
      },
    ],
    submissionTime: '2024-03-15T13:30Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29595/-1',
  },
  {
    flrID: '2024-03-16T16:22:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-16T16:22Z',
    peakTime: '2024-03-16T16:35Z',
    endTime: '2024-03-16T16:44Z',
    classType: 'M3.5',
    sourceLocation: 'S17E90',
    activeRegionNum: 13615,
    note: 'Flare occurs beyond the SE limb. This Active Region was number on 2023-03-18.',
    linkedEvents: null,
    submissionTime: '2024-03-20T13:40Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29620/-1',
  },
  {
    flrID: '2024-03-16T21:27:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-16T21:27Z',
    peakTime: '2024-03-16T21:55Z',
    endTime: '2024-03-16T22:11Z',
    classType: 'M1.1',
    sourceLocation: 'S16E90',
    activeRegionNum: 13615,
    note: 'Flare occurs beyond the SE limb. This Active Region was number on 2023-03-18.',
    linkedEvents: null,
    submissionTime: '2024-03-20T18:39Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29677/-1',
  },
  {
    flrID: '2024-03-18T03:21:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-18T03:21Z',
    peakTime: '2024-03-18T03:32Z',
    endTime: '2024-03-18T03:45Z',
    classType: 'M2.7',
    sourceLocation: 'N21W85',
    activeRegionNum: 13612,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-03-18T04:24:00-CME-001',
      },
    ],
    submissionTime: '2024-03-18T11:38Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29645/-1',
  },
  {
    flrID: '2024-03-18T04:06:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-18T04:06Z',
    peakTime: '2024-03-18T04:14Z',
    endTime: '2024-03-18T04:24Z',
    classType: 'M1.0',
    sourceLocation: 'N16E68',
    activeRegionNum: 13614,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-18T11:40Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29646/-1',
  },
  {
    flrID: '2024-03-18T19:02:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-18T19:02Z',
    peakTime: '2024-03-18T19:19Z',
    endTime: '2024-03-18T19:28Z',
    classType: 'M6.7',
    sourceLocation: 'S11E69',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-18T19:33Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29653/-1',
  },
  {
    flrID: '2024-03-19T02:24:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-19T02:24Z',
    peakTime: '2024-03-19T02:29Z',
    endTime: '2024-03-19T02:38Z',
    classType: 'M1.4',
    sourceLocation: 'S14E65',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-19T12:04Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29656/-1',
  },
  {
    flrID: '2024-03-19T23:17:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-19T23:17Z',
    peakTime: '2024-03-19T23:27Z',
    endTime: '2024-03-19T23:32Z',
    classType: 'M2.1',
    sourceLocation: 'S17E56',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-20T11:34Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29665/-1',
  },
  {
    flrID: '2024-03-20T07:23:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-20T07:23Z',
    peakTime: '2024-03-20T07:36Z',
    endTime: '2024-03-20T07:47Z',
    classType: 'M7.4',
    sourceLocation: 'S10E48',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-20T11:27Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29663/-1',
  },
  {
    flrID: '2024-03-20T22:46:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-20T22:46Z',
    peakTime: '2024-03-20T22:55Z',
    endTime: '2024-03-20T23:00Z',
    classType: 'M1.9',
    sourceLocation: 'S17E43',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-21T12:15Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29683/-1',
  },
  {
    flrID: '2024-03-22T13:45:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-22T13:45Z',
    peakTime: '2024-03-22T13:58Z',
    endTime: '2024-03-22T14:12Z',
    classType: 'C8.4',
    sourceLocation: 'N18E13',
    activeRegionNum: 13614,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-03-22T14:48:00-CME-001',
      },
    ],
    submissionTime: '2024-03-22T19:36Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29706/-1',
  },
  {
    flrID: '2024-03-22T20:18:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-22T20:18Z',
    peakTime: '2024-03-22T20:32Z',
    endTime: '2024-03-22T20:45Z',
    classType: 'M4.2',
    sourceLocation: 'S14E19',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-22T20:49Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29707/-1',
  },
  {
    flrID: '2024-03-23T00:58:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-23T00:58Z',
    peakTime: '2024-03-23T01:33Z',
    endTime: '2024-03-23T02:21Z',
    classType: 'X1.1',
    sourceLocation: 'N25E07',
    activeRegionNum: 13614,
    note: 'This flare appears to be a sympathetic eruption from both AR 3614 (flare centered ~N25E07) and AR 3615 (flare centered ~S14E15) in opposite hemispheres. The primary association is given to AR 3615 as it is marginally brighter of the two, but AR 3614 appears to be associated with an eruption/EUV wave seen in SDO AIA 193 while AR 3615 is not. Further analysis may need to be conducted of this event.',
    linkedEvents: [
      {
        activityID: '2024-03-23T01:25:00-CME-001',
      },
      {
        activityID: '2024-03-23T05:57:00-SEP-001',
      },
      {
        activityID: '2024-03-23T06:49:00-SEP-001',
      },
      {
        activityID: '2024-03-23T08:15:00-SEP-001',
      },
      {
        activityID: '2024-03-23T09:55:00-SEP-001',
      },
    ],
    submissionTime: '2024-03-23T12:33Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29708/-1',
  },
  {
    flrID: '2024-03-23T06:47:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-23T06:47Z',
    peakTime: '2024-03-23T06:55Z',
    endTime: '2024-03-23T06:59Z',
    classType: 'M1.1',
    sourceLocation: 'S13E04',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-23T12:20Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29719/-1',
  },
  {
    flrID: '2024-03-23T07:01:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-23T07:01Z',
    peakTime: '2024-03-23T07:09Z',
    endTime: '2024-03-23T07:26Z',
    classType: 'M2.4',
    sourceLocation: 'S14E11',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-23T12:19Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29718/-1',
  },
  {
    flrID: '2024-03-23T07:26:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-23T07:26Z',
    peakTime: '2024-03-23T07:38Z',
    endTime: '2024-03-23T07:47Z',
    classType: 'M3.1',
    sourceLocation: 'S14E10',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-23T12:16Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29717/-1',
  },
  {
    flrID: '2024-03-23T11:22:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-23T11:22Z',
    peakTime: '2024-03-23T11:29Z',
    endTime: '2024-03-23T11:36Z',
    classType: 'M1.0',
    sourceLocation: 'S14E07',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-23T12:15Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29716/-1',
  },
  {
    flrID: '2024-03-23T12:36:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-23T12:36Z',
    peakTime: '2024-03-23T12:47Z',
    endTime: '2024-03-23T12:56Z',
    classType: 'M1.3',
    sourceLocation: 'S14E07',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-23T18:12Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29742/-1',
  },
  {
    flrID: '2024-03-23T13:04:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-23T13:04Z',
    peakTime: '2024-03-23T13:11Z',
    endTime: '2024-03-23T13:20Z',
    classType: 'M1.1',
    sourceLocation: 'S14E10',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-23T17:27Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29724/-1',
  },
  {
    flrID: '2024-03-23T13:31:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-23T13:31Z',
    peakTime: '2024-03-23T13:37Z',
    endTime: '2024-03-23T13:44Z',
    classType: 'M1.9',
    sourceLocation: 'S14E10',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-23T18:17Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29725/-1',
  },
  {
    flrID: '2024-03-23T13:51:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-23T13:51Z',
    peakTime: '2024-03-23T14:02Z',
    endTime: '2024-03-23T14:15Z',
    classType: 'M5.3',
    sourceLocation: 'S14E05',
    activeRegionNum: 13615,
    note: 'Previous auto generated notifications (20240323-AL-007 and 20240323-AL-008) were sent due to detected modulation in the GOES Primary X-ray Flux around the M5 intensity threshold. GOES primary X-ray flux fluctuated slightly between peak values during this event, with the final and highest peak value occurring at 2024-03-23T14:02Z with a flare intensity of M5.3. Notification with ID 20240323-AL-011 corresponds to this value and is the correct notification corresponding to this event',
    linkedEvents: null,
    submissionTime: '2024-03-23T18:40Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29730/-1',
  },
  {
    flrID: '2024-03-23T14:49:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-23T14:49Z',
    peakTime: '2024-03-23T14:53Z',
    endTime: '2024-03-23T14:58Z',
    classType: 'M1.5',
    sourceLocation: 'S14E06',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-23T18:35Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29743/-1',
  },
  {
    flrID: '2024-03-23T15:01:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-23T15:01Z',
    peakTime: '2024-03-23T15:13Z',
    endTime: '2024-03-23T15:17Z',
    classType: 'M3.8',
    sourceLocation: 'S14E07',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-23T16:08Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29737/-1',
  },
  {
    flrID: '2024-03-23T15:17:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-23T15:17Z',
    peakTime: '2024-03-23T15:22Z',
    endTime: '2024-03-23T15:27Z',
    classType: 'M3.7',
    sourceLocation: 'S15E05',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-23T16:53Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29741/-1',
  },
  {
    flrID: '2024-03-23T16:22:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-23T16:22Z',
    peakTime: '2024-03-23T16:51Z',
    endTime: '2024-03-23T17:07Z',
    classType: 'M2.8',
    sourceLocation: 'S15E06',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-23T18:38Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29744/-1',
  },
  {
    flrID: '2024-03-23T23:30:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-23T23:30Z',
    peakTime: '2024-03-23T23:49Z',
    endTime: '2024-03-24T00:03Z',
    classType: 'M2.4',
    sourceLocation: 'S11W01',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-24T00:19Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29750/-1',
  },
  {
    flrID: '2024-03-24T00:51:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-24T00:51Z',
    peakTime: '2024-03-24T01:04Z',
    endTime: '2024-03-24T01:12Z',
    classType: 'C9.9',
    sourceLocation: 'S14E00',
    activeRegionNum: 13615,
    note: 'This event begins a few minutes before and overlaps with the start of the M1.4 flare peaking at 2024-03-26T01:25Z, which occurs from the same Active Region.',
    linkedEvents: null,
    submissionTime: '2024-03-26T17:05Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29755/-1',
  },
  {
    flrID: '2024-03-24T01:12:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-24T01:12Z',
    peakTime: '2024-03-24T01:25Z',
    endTime: '2024-03-24T01:30Z',
    classType: 'M1.4',
    sourceLocation: 'S14W00',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-24T03:48Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29756/-1',
  },
  {
    flrID: '2024-03-24T01:43:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-24T01:43Z',
    peakTime: '2024-03-24T01:54Z',
    endTime: '2024-03-24T01:57Z',
    classType: 'M2.1',
    sourceLocation: 'S14W00',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-24T03:50Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29757/-1',
  },
  {
    flrID: '2024-03-24T01:57:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-24T01:57Z',
    peakTime: '2024-03-24T02:05Z',
    endTime: '2024-03-24T02:09Z',
    classType: 'M2.3',
    sourceLocation: 'S14E01',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-24T03:50Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29758/-1',
  },
  {
    flrID: '2024-03-24T02:09:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-24T02:09Z',
    peakTime: '2024-03-24T02:18Z',
    endTime: '2024-03-24T02:29Z',
    classType: 'M2.7',
    sourceLocation: 'S13E02',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-24T03:50Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29759/-1',
  },
  {
    flrID: '2024-03-24T05:59:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-24T05:59Z',
    peakTime: '2024-03-24T06:06Z',
    endTime: '2024-03-24T06:10Z',
    classType: 'M2.2',
    sourceLocation: 'S15W05',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-24T14:28Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29764/-1',
  },
  {
    flrID: '2024-03-24T07:36:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-24T07:36Z',
    peakTime: '2024-03-24T07:51Z',
    endTime: '2024-03-24T08:06Z',
    classType: 'M1.3',
    sourceLocation: 'S13W02',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-24T14:37Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29765/-1',
  },
  {
    flrID: '2024-03-24T12:10:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-24T12:10Z',
    peakTime: '2024-03-24T12:18Z',
    endTime: '2024-03-24T12:22Z',
    classType: 'M1.1',
    sourceLocation: 'S13W07',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-24T22:02Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29785/-1',
  },
  {
    flrID: '2024-03-24T12:27:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-24T12:27Z',
    peakTime: '2024-03-24T12:34Z',
    endTime: '2024-03-24T12:39Z',
    classType: 'M1.0',
    sourceLocation: 'S15W04',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-24T22:03Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29786/-1',
  },
  {
    flrID: '2024-03-24T13:00:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-24T13:00Z',
    peakTime: '2024-03-24T13:13Z',
    endTime: '2024-03-24T13:28Z',
    classType: 'M1.2',
    sourceLocation: 'S13W02',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-24T14:44Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29766/-1',
  },
  {
    flrID: '2024-03-25T06:37:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-25T06:37Z',
    peakTime: '2024-03-25T06:44Z',
    endTime: '2024-03-25T06:48Z',
    classType: 'M4.4',
    sourceLocation: 'S12W25',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-25T12:13Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29789/-1',
  },
  {
    flrID: '2024-03-25T14:30:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-25T14:30Z',
    peakTime: '2024-03-25T14:51Z',
    endTime: '2024-03-25T14:56Z',
    classType: 'C5.9',
    sourceLocation: 'N17E52',
    activeRegionNum: 13622,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-03-25T15:12:00-CME-001',
      },
    ],
    submissionTime: '2024-03-26T12:45Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29803/-1',
  },
  {
    flrID: '2024-03-26T00:28:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-26T00:28Z',
    peakTime: '2024-03-26T00:36Z',
    endTime: '2024-03-26T00:40Z',
    classType: 'M1.8',
    sourceLocation: 'S12W34',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-26T01:15Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29800/-1',
  },
  {
    flrID: '2024-03-26T10:11:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-26T10:11Z',
    peakTime: '2024-03-26T10:17Z',
    endTime: '2024-03-26T10:24Z',
    classType: 'M1.0',
    sourceLocation: 'S13W25',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-26T12:14Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29802/-1',
  },
  {
    flrID: '2024-03-26T10:36:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-26T10:36Z',
    peakTime: '2024-03-26T10:43Z',
    endTime: '2024-03-26T10:52Z',
    classType: 'M1.3',
    sourceLocation: 'S11W34',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-26T12:13Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29801/-1',
  },
  {
    flrID: '2024-03-26T12:55:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-26T12:55Z',
    peakTime: '2024-03-26T13:30Z',
    endTime: '2024-03-26T13:41Z',
    classType: 'M1.9',
    sourceLocation: 'S14W31',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-26T13:52Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29805/-1',
  },
  {
    flrID: '2024-03-26T13:41:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-26T13:41Z',
    peakTime: '2024-03-26T13:46Z',
    endTime: '2024-03-26T13:50Z',
    classType: 'M1.7',
    sourceLocation: 'S14W33',
    activeRegionNum: 13615,
    note: 'Preliminarily associated with AR 3615, but flaring can also be seen from AR 3621 (approx. N17W73)',
    linkedEvents: null,
    submissionTime: '2024-03-26T14:05Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29806/-1',
  },
  {
    flrID: '2024-03-26T21:43:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-26T21:43Z',
    peakTime: '2024-03-26T21:58Z',
    endTime: '2024-03-26T22:07Z',
    classType: 'M1.6',
    sourceLocation: 'S11W41',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-26T22:28Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29815/-1',
  },
  {
    flrID: '2024-03-27T01:37:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-27T01:37Z',
    peakTime: '2024-03-27T01:44Z',
    endTime: '2024-03-27T01:52Z',
    classType: 'M1.1',
    sourceLocation: 'S10W45',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-27T12:51Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29817/-1',
  },
  {
    flrID: '2024-03-27T06:33:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-27T06:33Z',
    peakTime: '2024-03-27T06:41Z',
    endTime: '2024-03-27T06:50Z',
    classType: 'M1.1',
    sourceLocation: 'S13W44',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-27T12:41Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29816/-1',
  },
  {
    flrID: '2024-03-28T06:16:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-28T06:16Z',
    peakTime: '2024-03-28T06:29Z',
    endTime: '2024-03-28T06:36Z',
    classType: 'M7.0',
    sourceLocation: 'S15W53',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-28T12:24Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29824/-1',
  },
  {
    flrID: '2024-03-28T15:40:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-28T15:40Z',
    peakTime: '2024-03-28T15:56Z',
    endTime: '2024-03-28T16:03Z',
    classType: 'M6.1',
    sourceLocation: 'S15W55',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-28T16:07Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29828/-1',
  },
  {
    flrID: '2024-03-28T19:21:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-28T19:21Z',
    peakTime: '2024-03-28T19:31Z',
    endTime: '2024-03-28T19:38Z',
    classType: 'M1.1',
    sourceLocation: 'S15W57',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-28T19:48Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29831/-1',
  },
  {
    flrID: '2024-03-28T20:29:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-28T20:29Z',
    peakTime: '2024-03-28T20:46Z',
    endTime: '2024-03-28T20:50Z',
    classType: 'M9.7',
    sourceLocation: 'S14W60',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-03-28T21:12:00-CME-001',
      },
    ],
    submissionTime: '2024-03-28T21:05Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29833/-1',
  },
  {
    flrID: '2024-03-28T20:50:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-28T20:50Z',
    peakTime: '2024-03-28T20:56Z',
    endTime: '2024-03-28T21:01Z',
    classType: 'X1.1',
    sourceLocation: 'S14W60',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-03-28T21:12:00-CME-001',
      },
    ],
    submissionTime: '2024-03-28T21:14Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29836/-1',
  },
  {
    flrID: '2024-03-29T02:17:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-29T02:17Z',
    peakTime: '2024-03-29T02:30Z',
    endTime: '2024-03-29T02:42Z',
    classType: 'M3.2',
    sourceLocation: 'S16W63',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-29T12:40Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29840/-1',
  },
  {
    flrID: '2024-03-29T18:22:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-29T18:22Z',
    peakTime: '2024-03-29T18:43Z',
    endTime: '2024-03-29T18:57Z',
    classType: 'M1.0',
    sourceLocation: 'S13W75',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-30T21:41Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29846/-1',
  },
  {
    flrID: '2024-03-29T19:19:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-29T19:19Z',
    peakTime: '2024-03-29T19:34Z',
    endTime: '2024-03-29T19:56Z',
    classType: 'M1.2',
    sourceLocation: 'S15W72',
    activeRegionNum: 13615,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-03-29T20:04Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29847/-1',
  },
  {
    flrID: '2024-03-30T21:01:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-30T21:01Z',
    peakTime: '2024-03-30T21:16Z',
    endTime: '2024-03-30T22:15Z',
    classType: 'M9.4',
    sourceLocation: 'S13W92',
    activeRegionNum: 13615,
    note: 'Partially occulted double-peaked long duration flare from Active Region 3615 that has rotated behind the SW limb. The flare is accompanied by a very bright ejecta that seems to contribute to the flare intensity/duration. The second flare peak starts very soon after the first one is reached (at 2024-03-30T21:21Z) and reaches intensity of M9.3 at 2024-03-30T21:31Z.',
    linkedEvents: [
      {
        activityID: '2024-03-30T21:36:00-CME-001',
      },
    ],
    submissionTime: '2024-04-03T12:11Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29854/-1',
  },
  {
    flrID: '2024-03-30T22:49:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-03-30T22:49Z',
    peakTime: '2024-03-30T22:53Z',
    endTime: '2024-03-30T23:07Z',
    classType: 'M4.5',
    sourceLocation: 'S13W93',
    activeRegionNum: 13615,
    note: 'Occulted flare from Active Region 3615 that has rotated behind the SW limb. There could also be more minor contribution to this flare from simultaneous flaring NE of Active Region 3624 at around N25E60. This flare comes on the back of the long duration double peaked M9.4 class flare from Active Region 3615, with contribution from a bright ejecta/post-eruptive arcades from this region.',
    linkedEvents: [
      {
        activityID: '2024-03-30T21:36:00-CME-001',
      },
    ],
    submissionTime: '2024-04-03T16:16Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29857/-1',
  },
  {
    flrID: '2024-04-01T01:13:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-01T01:13Z',
    peakTime: '2024-04-01T01:32Z',
    endTime: '2024-04-01T01:57Z',
    classType: 'M3.9',
    sourceLocation: 'S13W108',
    activeRegionNum: 13615,
    note: 'There is also a simultaneous sympathetic eruption and a more minor flare in Active Region 3625 (N12W66).',
    linkedEvents: null,
    submissionTime: '2024-04-01T02:05Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29875/-1',
  },
  {
    flrID: '2024-04-11T16:52:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-11T16:52Z',
    peakTime: '2024-04-11T17:06Z',
    endTime: '2024-04-11T17:11Z',
    classType: 'M5.4',
    sourceLocation: 'S15E90',
    activeRegionNum: null,
    note: "Sympathetic flaring from regions in the NE and SE beyond the eastern limb. Possibly old AR's 3614 (~N20E90+) and 3615 (~S15E90+).",
    linkedEvents: [
      {
        activityID: '2024-04-11T17:12:00-CME-001',
      },
    ],
    submissionTime: '2024-04-11T17:36Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/29986/-1',
  },
  {
    flrID: '2024-04-12T17:45:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-12T17:45Z',
    peakTime: '2024-04-12T17:55Z',
    endTime: '2024-04-12T17:59Z',
    classType: 'C8.9',
    sourceLocation: 'S13E90',
    activeRegionNum: 13637,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-04-12T18:12:00-CME-001',
      },
    ],
    submissionTime: '2024-04-13T14:57Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30030/-1',
  },
  {
    flrID: '2024-04-13T04:58:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-13T04:58Z',
    peakTime: '2024-04-13T05:02Z',
    endTime: '2024-04-13T05:06Z',
    classType: 'M2.4',
    sourceLocation: 'S13E83',
    activeRegionNum: 13637,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-04-13T05:12:00-CME-001',
      },
    ],
    submissionTime: '2024-04-13T12:29Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30029/-1',
  },
  {
    flrID: '2024-04-13T14:48:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-13T14:48Z',
    peakTime: '2024-04-13T14:59Z',
    endTime: '2024-04-13T15:08Z',
    classType: 'C5.5',
    sourceLocation: 'N29W10',
    activeRegionNum: 13634,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-04-13T18:00:00-CME-001',
      },
    ],
    submissionTime: '2024-04-15T18:36Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30072/-1',
  },
  {
    flrID: '2024-04-13T21:01:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-13T21:01Z',
    peakTime: '2024-04-13T21:09Z',
    endTime: '2024-04-13T21:18Z',
    classType: 'C2.1',
    sourceLocation: 'S18E72',
    activeRegionNum: 13638,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-04-13T21:24:00-CME-001',
      },
    ],
    submissionTime: '2024-04-16T15:56Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30096/-1',
  },
  {
    flrID: '2024-04-14T02:24:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-14T02:24Z',
    peakTime: '2024-04-14T02:32Z',
    endTime: '2024-04-14T02:36Z',
    classType: 'M4.3',
    sourceLocation: 'S14E65',
    activeRegionNum: 13637,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-04-14T12:25Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30048/-1',
  },
  {
    flrID: '2024-04-14T10:24:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-14T10:24Z',
    peakTime: '2024-04-14T11:01Z',
    endTime: '2024-04-14T11:27Z',
    classType: 'C5.0',
    sourceLocation: 'S17E44',
    activeRegionNum: 13636,
    note: 'Manually calculated end time, end time is interrupted by a second peak from a separate flare.',
    linkedEvents: [
      {
        activityID: '2024-04-14T11:12:00-CME-001',
      },
    ],
    submissionTime: '2024-04-15T20:17Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30085/-1',
  },
  {
    flrID: '2024-04-15T01:06:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-15T01:06Z',
    peakTime: '2024-04-15T01:18Z',
    endTime: '2024-04-15T01:26Z',
    classType: 'M1.7',
    sourceLocation: 'N28E61',
    activeRegionNum: 13639,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-04-15T12:23Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30060/-1',
  },
  {
    flrID: '2024-04-15T05:47:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-15T05:47Z',
    peakTime: '2024-04-15T06:00Z',
    endTime: '2024-04-15T06:07Z',
    classType: 'C5.6',
    sourceLocation: 'S17E30',
    activeRegionNum: 13636,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-04-15T06:48:00-CME-001',
      },
    ],
    submissionTime: '2024-04-15T20:11Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30084/-1',
  },
  {
    flrID: '2024-04-15T07:15:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-15T07:15Z',
    peakTime: '2024-04-15T07:32Z',
    endTime: '2024-04-15T07:38Z',
    classType: 'M1.0',
    sourceLocation: 'N31E60',
    activeRegionNum: 13639,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-04-15T12:24Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30061/-1',
  },
  {
    flrID: '2024-04-15T08:38:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-15T08:38Z',
    peakTime: '2024-04-15T08:42Z',
    endTime: '2024-04-15T08:47Z',
    classType: 'M2.3',
    sourceLocation: 'N27W28',
    activeRegionNum: 13634,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-04-15T12:26Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30062/-1',
  },
  {
    flrID: '2024-04-15T09:21:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-15T09:21Z',
    peakTime: '2024-04-15T09:32Z',
    endTime: '2024-04-15T09:42Z',
    classType: 'M1.2',
    sourceLocation: 'N29E61',
    activeRegionNum: 13639,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-04-15T12:28Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30063/-1',
  },
  {
    flrID: '2024-04-15T13:43:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-15T13:43Z',
    peakTime: '2024-04-15T13:58Z',
    endTime: '2024-04-15T14:01Z',
    classType: 'M1.1',
    sourceLocation: 'N29E55',
    activeRegionNum: 13639,
    note: 'Simultaneous flaring occurred here with AR 3634 (located at N27W33), this was the first of two distinct peaks visible in SDO AIA 131. The second peak, visibly associated to AR 3634, cut off this flare and the end time may be early as a result.',
    linkedEvents: null,
    submissionTime: '2024-04-15T14:56Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30065/-1',
  },
  {
    flrID: '2024-04-15T14:01:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-15T14:01Z',
    peakTime: '2024-04-15T14:04Z',
    endTime: '2024-04-15T14:08Z',
    classType: 'M1.4',
    sourceLocation: 'N27W33',
    activeRegionNum: 13634,
    note: 'Simultaneous flaring occurred here with AR 3639 (located at N29E55), this was the second of two distinct peaks visible in SDO AIA 131. The first peak, visibly associated to AR 3639, had its end time cut off by this flare.',
    linkedEvents: null,
    submissionTime: '2024-04-15T14:57Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30066/-1',
  },
  {
    flrID: '2024-04-15T14:08:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-15T14:08Z',
    peakTime: '2024-04-15T14:17Z',
    endTime: '2024-04-15T14:27Z',
    classType: 'M2.2',
    sourceLocation: 'N29E55',
    activeRegionNum: 13639,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-04-15T14:51Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30064/-1',
  },
  {
    flrID: '2024-04-15T19:25:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-15T19:25Z',
    peakTime: '2024-04-15T19:32Z',
    endTime: '2024-04-15T19:39Z',
    classType: 'M4.0',
    sourceLocation: 'N29E55',
    activeRegionNum: 13639,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-04-15T19:54Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30083/-1',
  },
  {
    flrID: '2024-04-16T17:49:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-16T17:49Z',
    peakTime: '2024-04-16T18:02Z',
    endTime: '2024-04-16T18:14Z',
    classType: 'M1.1',
    sourceLocation: 'S10E35',
    activeRegionNum: 13645,
    note: 'This flare occurred in between Active Regions 13637 and 13643 at the time of the event. However, this in between region was later designated Active Region 13645.',
    linkedEvents: null,
    submissionTime: '2024-04-18T15:54Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30099/-1',
  },
  {
    flrID: '2024-04-17T20:00:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-17T20:00Z',
    peakTime: '2024-04-17T20:04Z',
    endTime: '2024-04-17T20:05Z',
    classType: 'C9.0',
    sourceLocation: 'S18E20',
    activeRegionNum: 13638,
    note: 'First peak of a double peaked flare, followed by C9.7 from the same region. Manually calculated end-time.',
    linkedEvents: [
      {
        activityID: '2024-04-17T21:12:00-CME-001',
      },
    ],
    submissionTime: '2024-04-18T21:22Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30125/-1',
  },
  {
    flrID: '2024-04-17T20:06:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-17T20:06Z',
    peakTime: '2024-04-17T20:08Z',
    endTime: '2024-04-17T20:09Z',
    classType: 'C9.7',
    sourceLocation: 'S18E20',
    activeRegionNum: 13638,
    note: 'Second peak of a double peaked flare, preceded by C9.0 from the same region. Manually calculated end-time.',
    linkedEvents: [
      {
        activityID: '2024-04-17T21:12:00-CME-001',
      },
    ],
    submissionTime: '2024-04-18T21:25Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30126/-1',
  },
  {
    flrID: '2024-04-17T21:55:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-17T21:55Z',
    peakTime: '2024-04-17T22:08Z',
    endTime: '2024-04-17T22:17Z',
    classType: 'M1.6',
    sourceLocation: 'S08E23',
    activeRegionNum: 13645,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-04-18T12:31Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30119/-1',
  },
  {
    flrID: '2024-04-18T02:32:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-18T02:32Z',
    peakTime: '2024-04-18T02:48Z',
    endTime: '2024-04-18T02:53Z',
    classType: 'M2.2',
    sourceLocation: 'S18E16',
    activeRegionNum: 13638,
    note: 'Some simultaneous brightening from nearby ARs 3643 and 3645, but the flare is largely from AR 3638 as observed in SDO AIA 131.',
    linkedEvents: [
      {
        activityID: '2024-04-18T03:12:00-CME-001',
      },
    ],
    submissionTime: '2024-04-18T12:36Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30120/-1',
  },
  {
    flrID: '2024-04-18T07:17:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-18T07:17Z',
    peakTime: '2024-04-18T07:37Z',
    endTime: '2024-04-18T08:09Z',
    classType: 'M1.3',
    sourceLocation: 'S12E24',
    activeRegionNum: 13643,
    note: 'This flare spatially occurs almost perfectly between AR 3643 and AR 3645, and association is given to AR 3643. [Active Region 13647 was newly numbered and assigned to this location on 2024-04-19.]',
    linkedEvents: null,
    submissionTime: '2024-04-19T12:37Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30121/-1',
  },
  {
    flrID: '2024-04-18T19:22:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-18T19:22Z',
    peakTime: '2024-04-18T20:16Z',
    endTime: '2024-04-18T20:21Z',
    classType: 'M1.6',
    sourceLocation: 'S12E15',
    activeRegionNum: 13647,
    note: 'Long-duration flare from Active Region 13647 that first reached an intensity of M1.6 at 2024-04-28T20:01Z, then experienced a very slight decrease to M1.5, then continued to increase reaching an intensity of M1.6 at 2024-04-28T20:16Z. The second of these two instances of M1.6 was chosen for the peak flux time, since it was the highest recorded intensity of the flare; the first instance reached M1.6028 while the second reached M1.6033.',
    linkedEvents: null,
    submissionTime: '2024-04-19T21:59Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30155/-1',
  },
  {
    flrID: '2024-04-19T04:40:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-19T04:40Z',
    peakTime: '2024-04-19T04:53Z',
    endTime: '2024-04-19T05:03Z',
    classType: 'M2.1',
    sourceLocation: 'S12E10',
    activeRegionNum: 13647,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-04-19T12:03Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30136/-1',
  },
  {
    flrID: '2024-04-19T12:53:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-19T12:53Z',
    peakTime: '2024-04-19T13:06Z',
    endTime: '2024-04-19T13:23Z',
    classType: 'M1.0',
    sourceLocation: 'S18W01',
    activeRegionNum: 13638,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-04-24T15:53Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30139/-1',
  },
  {
    flrID: '2024-04-20T08:36:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-20T08:36Z',
    peakTime: '2024-04-20T08:49Z',
    endTime: '2024-04-20T09:03Z',
    classType: 'C3.9',
    sourceLocation: 'S20W33',
    activeRegionNum: 13636,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-04-20T09:24:00-CME-001',
      },
    ],
    submissionTime: '2024-04-20T17:43Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30165/-1',
  },
  {
    flrID: '2024-04-21T10:51:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-21T10:51Z',
    peakTime: '2024-04-21T10:53Z',
    endTime: '2024-04-21T10:56Z',
    classType: 'C2.7',
    sourceLocation: 'S17W34',
    activeRegionNum: 13638,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-04-21T11:12:00-CME-001',
      },
    ],
    submissionTime: '2024-04-22T20:23Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30191/-1',
  },
  {
    flrID: '2024-04-21T12:11:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-21T12:11Z',
    peakTime: '2024-04-21T12:17Z',
    endTime: '2024-04-21T12:33Z',
    classType: 'C3.6',
    sourceLocation: 'S20W33',
    activeRegionNum: 13638,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-04-21T12:48:00-CME-001',
      },
    ],
    submissionTime: '2024-04-22T20:17Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30190/-1',
  },
  {
    flrID: '2024-04-21T12:39:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-21T12:39Z',
    peakTime: '2024-04-21T12:59Z',
    endTime: '2024-04-21T13:34Z',
    classType: 'M1.0',
    sourceLocation: 'S08W27',
    activeRegionNum: 13645,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-04-21T14:31Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30166/-1',
  },
  {
    flrID: '2024-04-21T15:07:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-21T15:07Z',
    peakTime: '2024-04-21T15:14Z',
    endTime: '2024-04-21T15:20Z',
    classType: 'M2.2',
    sourceLocation: 'S19W35',
    activeRegionNum: 13638,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-04-21T15:37:00-CME-001',
      },
    ],
    submissionTime: '2024-04-21T16:16Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30169/-1',
  },
  {
    flrID: '2024-04-21T21:44:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-21T21:44Z',
    peakTime: '2024-04-21T21:52Z',
    endTime: '2024-04-21T21:57Z',
    classType: 'M3.4',
    sourceLocation: 'S19W37',
    activeRegionNum: 13638,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-04-21T22:12:00-CME-001',
      },
    ],
    submissionTime: '2024-04-22T13:24Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30179/-1',
  },
  {
    flrID: '2024-04-22T05:27:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-22T05:27Z',
    peakTime: '2024-04-22T05:37Z',
    endTime: '2024-04-22T05:42Z',
    classType: 'C8.9',
    sourceLocation: 'S19W41',
    activeRegionNum: 13638,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-04-22T06:12:00-CME-001',
      },
    ],
    submissionTime: '2024-04-22T17:08Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30186/-1',
  },
  {
    flrID: '2024-04-22T07:58:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-22T07:58Z',
    peakTime: '2024-04-22T08:13Z',
    endTime: '2024-04-22T08:30Z',
    classType: 'M1.0',
    sourceLocation: 'S06W39',
    activeRegionNum: 13645,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-04-22T13:24Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30180/-1',
  },
  {
    flrID: '2024-04-22T12:07:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-22T12:07Z',
    peakTime: '2024-04-22T12:12Z',
    endTime: '2024-04-22T12:24Z',
    classType: 'C5.9',
    sourceLocation: 'S19W45',
    activeRegionNum: 13638,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-04-22T12:36:00-CME-001',
      },
    ],
    submissionTime: '2024-04-22T17:35Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30187/-1',
  },
  {
    flrID: '2024-04-22T13:13:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-22T13:13Z',
    peakTime: '2024-04-22T13:35Z',
    endTime: '2024-04-22T14:17Z',
    classType: 'M1.6',
    sourceLocation: 'S11W39',
    activeRegionNum: 13645,
    note: 'Simultaneous, less intense flaring seen at AR 3656 (S11E67) at 2024-04-22T13:36Z.',
    linkedEvents: null,
    submissionTime: '2024-04-22T15:46Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30181/-1',
  },
  {
    flrID: '2024-04-22T14:46:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-22T14:46Z',
    peakTime: '2024-04-22T14:55Z',
    endTime: '2024-04-22T15:08Z',
    classType: 'M1.1',
    sourceLocation: 'S06W45',
    activeRegionNum: 13645,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-04-22T15:20Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30182/-1',
  },
  {
    flrID: '2024-04-22T15:08:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-22T15:08Z',
    peakTime: '2024-04-22T15:19Z',
    endTime: '2024-04-22T15:32Z',
    classType: 'M1.6',
    sourceLocation: 'N21E06',
    activeRegionNum: 13646,
    note: 'Previous flaring was continuing from AR 3645 (S05W48) during this impulsive flare from AR 3646. Simultaneous, less intense flare seen near AR 3638 at S20W48 with approximate peak at 2024-04-22T15:23Z as seen in GOES SUVI 131 imagery. Active Region locations taken at peak time of flare, 2024-04-22T15:19Z.',
    linkedEvents: null,
    submissionTime: '2024-04-22T16:26Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30184/-1',
  },
  {
    flrID: '2024-04-22T15:41:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-22T15:41Z',
    peakTime: '2024-04-22T15:50Z',
    endTime: '2024-04-22T15:58Z',
    classType: 'M2.8',
    sourceLocation: 'S11E70',
    activeRegionNum: 13656,
    note: 'Previous flaring was continuing from AR 3646 (N21E05) and AR 3645 (S05W50) during this impulsive flare from AR 3656. Simultaneous, less intense but impulsive flare seen at AR 3638 (S18W44) starting at 2024-04-22T15:45Z in SDO AIA 131. Simultaneous, less intense flare seen at AR 3652 (N15E22) starting at 2024-04-22T15:45Z in SDO AIA 131. Active Region locations taken at peak time of flare, 2024-04-22T15:50Z.',
    linkedEvents: [
      {
        activityID: '2024-04-22T16:12:00-CME-001',
      },
    ],
    submissionTime: '2024-04-22T16:35Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30183/-1',
  },
  {
    flrID: '2024-04-22T16:26:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-22T16:26Z',
    peakTime: '2024-04-22T16:30Z',
    endTime: '2024-04-22T16:36Z',
    classType: 'M1.0',
    sourceLocation: 'S13E67',
    activeRegionNum: 13656,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-04-22T16:59Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30185/-1',
  },
  {
    flrID: '2024-04-22T21:05:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-22T21:05Z',
    peakTime: '2024-04-22T21:16Z',
    endTime: '2024-04-22T21:24Z',
    classType: 'M1.5',
    sourceLocation: 'S20W48',
    activeRegionNum: 13638,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-04-22T21:48:00-CME-001',
      },
      {
        activityID: '2024-04-22T22:24:00-CME-001',
      },
    ],
    submissionTime: '2024-04-23T12:46Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30207/-1',
  },
  {
    flrID: '2024-04-22T22:59:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-22T22:59Z',
    peakTime: '2024-04-22T23:18Z',
    endTime: '2024-04-22T23:38Z',
    classType: 'M1.0',
    sourceLocation: 'S07W50',
    activeRegionNum: 13645,
    note: 'Brightening associated with post-eruptive arcades.',
    linkedEvents: null,
    submissionTime: '2024-04-23T12:48Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30208/-1',
  },
  {
    flrID: '2024-04-23T03:06:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-23T03:06Z',
    peakTime: '2024-04-23T03:19Z',
    endTime: '2024-04-23T03:35Z',
    classType: 'M3.6',
    sourceLocation: 'S06E45',
    activeRegionNum: 13654,
    note: 'Simultaneous and overlapping flaring from three Active Regions. Impulsive flare from AR 3654 (S06E45) with distinct brightening starting at 2024-04-23T03:12Z in SDO AIA 131. Significant brightening from AR 3647 (S12W45) is seen starting at 2024-04-23T03:18Z in SDO AIA 131. Significant brightening from AR 3646 (N20W03) is seen starting at 2024-04-23T03:20Z in SDO AIA 131. Brightening at all three locations may possibly have eruptions associated. Eruption of filament seen in UV imagery at about 2024-04-23T03:24Z stretching from S05W10 to S30E05 is not located near any of the three active regions that contributed to this flare.',
    linkedEvents: [
      {
        activityID: '2024-04-23T04:12:00-CME-001',
      },
    ],
    submissionTime: '2024-04-23T12:58Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30209/-1',
  },
  {
    flrID: '2024-04-23T08:07:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-23T08:07Z',
    peakTime: '2024-04-23T08:21Z',
    endTime: '2024-04-23T08:29Z',
    classType: 'M3.0',
    sourceLocation: 'S06E41',
    activeRegionNum: 13654,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-04-23T09:12:00-CME-001',
      },
    ],
    submissionTime: '2024-04-23T12:43Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30206/-1',
  },
  {
    flrID: '2024-04-23T16:25:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-23T16:25Z',
    peakTime: '2024-04-23T16:51Z',
    endTime: '2024-04-23T17:19Z',
    classType: 'M1.0',
    sourceLocation: 'S12W50',
    activeRegionNum: 13647,
    note: 'Although his brightening is primarily associated with possible eruptive activity seen on the disk at AR 3647, the bright arcade spans to nearby AR 3645 (S10W55). Simultaneous, less intense flare seen from AR 3654 (S06E37) starting at 2024-04-23T16:49Z. Active Region locations taken at peak time of flare, 2024-04-23T16:51Z.',
    linkedEvents: null,
    submissionTime: '2024-04-23T18:50Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30226/-1',
  },
  {
    flrID: '2024-04-23T17:33:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-23T17:33Z',
    peakTime: '2024-04-23T17:44Z',
    endTime: '2024-04-23T17:52Z',
    classType: 'M2.9',
    sourceLocation: 'S19W60',
    activeRegionNum: 13638,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-04-23T18:12:00-CME-001',
      },
      {
        activityID: '2024-04-23T18:24:00-CME-001',
      },
    ],
    submissionTime: '2024-04-23T18:36Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30221/-1',
  },
  {
    flrID: '2024-04-24T00:13:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-24T00:13Z',
    peakTime: '2024-04-24T00:29Z',
    endTime: '2024-04-24T00:38Z',
    classType: 'M1.7',
    sourceLocation: 'S10W61',
    activeRegionNum: 13645,
    note: 'This flare directly precedes M1.6 flare peaking at 2024-04-24T00:42Z, with corresponding brightening from AR 3645. There are numerous ARs in the vicinity of this flare, but brightening is seen in the vicinity of AR 3645 in SDO AIA 131.',
    linkedEvents: null,
    submissionTime: '2024-04-24T14:28Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30238/-1',
  },
  {
    flrID: '2024-04-24T00:38:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-24T00:38Z',
    peakTime: '2024-04-24T00:42Z',
    endTime: '2024-04-24T00:46Z',
    classType: 'M1.6',
    sourceLocation: 'S09W65',
    activeRegionNum: 13645,
    note: 'This flare directly follows an M1.7 flare peaking at 2024-04-24T00:29Z, with corresponding brightening from AR 3645. There are numerous ARs in the vicinity of this flare, but brightening is seen in the vicinity of AR 3645 in SDO AIA 131.',
    linkedEvents: null,
    submissionTime: '2024-04-24T14:30Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30242/-1',
  },
  {
    flrID: '2024-04-24T02:30:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-24T02:30Z',
    peakTime: '2024-04-24T02:39Z',
    endTime: '2024-04-24T02:44Z',
    classType: 'M1.8',
    sourceLocation: 'S17W64',
    activeRegionNum: 13638,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-04-24T12:23Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30239/-1',
  },
  {
    flrID: '2024-04-24T12:07:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-24T12:07Z',
    peakTime: '2024-04-24T12:14Z',
    endTime: '2024-04-24T12:39Z',
    classType: 'M1.4',
    sourceLocation: 'S07W70',
    activeRegionNum: 13645,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-04-24T12:52Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30241/-1',
  },
  {
    flrID: '2024-04-24T14:02:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-24T14:02Z',
    peakTime: '2024-04-24T14:10Z',
    endTime: '2024-04-24T14:20Z',
    classType: 'C9.4',
    sourceLocation: 'S18W70',
    activeRegionNum: 13638,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-04-24T15:05:00-CME-001',
      },
    ],
    submissionTime: '2024-04-25T12:47Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30272/-1',
  },
  {
    flrID: '2024-04-24T22:27:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-24T22:27Z',
    peakTime: '2024-04-24T22:50Z',
    endTime: '2024-04-24T22:54Z',
    classType: 'M1.1',
    sourceLocation: 'S12W60',
    activeRegionNum: 13643,
    note: 'This flare from AR 13643 (S12W60) overlaps with an M2.0 flare from AR 13645 (S11W80). Some additional flux from simultaneous flaring seen at AR 13645 may have contributed to the peak flux of this flare.',
    linkedEvents: null,
    submissionTime: '2024-04-25T15:16Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30285/-1',
  },
  {
    flrID: '2024-04-24T22:54:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-24T22:54Z',
    peakTime: '2024-04-24T22:59Z',
    endTime: '2024-04-24T23:05Z',
    classType: 'M2.0',
    sourceLocation: 'S11W80',
    activeRegionNum: 13645,
    note: 'Associated with a bright loop seen at AR 13645 with an impulsive signature ("lens flare" or "x marks the spot" in SDO AIA 131) seen at AR 13645 at the peak time 2024-04-24T22:59Z. Some additional flux from simultaneous flaring seen at AR 13643 may have contributed to the peak flux of this flare.',
    linkedEvents: null,
    submissionTime: '2024-04-25T15:09Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30284/-1',
  },
  {
    flrID: '2024-04-25T01:40:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-25T01:40Z',
    peakTime: '2024-04-25T01:49Z',
    endTime: '2024-04-25T02:01Z',
    classType: 'M1.0',
    sourceLocation: 'S11E75',
    activeRegionNum: 13645,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-04-25T16:15Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30287/-1',
  },
  {
    flrID: '2024-04-25T02:39:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-25T02:39Z',
    peakTime: '2024-04-25T02:43Z',
    endTime: '2024-04-25T02:46Z',
    classType: 'M1.0',
    sourceLocation: 'S13W64',
    activeRegionNum: 13647,
    note: 'This flare is associated with sudden brightening from Active Region 13647 (S13W64). Simultaneous, less intense flaring occurs near Active Region 13648 (N17W48) starting at 2024-04-25T02:48Z which may have also contributed to this flare. X-ray flux was previously elevated by the M1.0 flare from Active Region 13645 peaking at 2024-04-25T01:49Z.',
    linkedEvents: null,
    submissionTime: '2024-04-25T17:33Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30290/-1',
  },
  {
    flrID: '2024-04-25T03:05:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-25T03:05Z',
    peakTime: '2024-04-25T03:15Z',
    endTime: '2024-04-25T03:35Z',
    classType: 'M1.0',
    sourceLocation: 'S12W72',
    activeRegionNum: 13645,
    note: 'This flare is primarily associated with sudden brightening from ~S12W72, which is located in between Active Regions 13638 and 13645. Simultaneous, less intense flaring occurs near Active Region 13648 (N17W48) starting at 2024-04-25T03:09Z which may have also contributed to this flare. X-ray flux was previously elevated by the M1.0 flare from Active Region 13645 peaking at 2024-04-25T01:49Z.',
    linkedEvents: null,
    submissionTime: '2024-04-25T19:00Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30288/-1',
  },
  {
    flrID: '2024-04-25T13:11:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-25T13:11Z',
    peakTime: '2024-04-25T13:21Z',
    endTime: '2024-04-25T13:27Z',
    classType: 'M1.0',
    sourceLocation: 'S19W90',
    activeRegionNum: 13638,
    note: '',
    linkedEvents: null,
    submissionTime: '2024-04-25T15:38Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30286/-1',
  },
  {
    flrID: '2024-04-25T17:03:00-FLR-001',
    instruments: [
      {
        displayName: 'GOES-P: EXIS 1.0-8.0',
      },
    ],
    beginTime: '2024-04-25T17:03Z',
    peakTime: '2024-04-25T17:12Z',
    endTime: '2024-04-25T17:16Z',
    classType: 'M1.3',
    sourceLocation: 'S19W88',
    activeRegionNum: 13638,
    note: '',
    linkedEvents: [
      {
        activityID: '2024-04-25T18:24:00-CME-001',
      },
    ],
    submissionTime: '2024-04-25T17:38Z',
    link: 'https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/30291/-1',
  },
];

export const otherChartsData: ChartData[] = [
  {
    id: 'chart_1',
    title: 'Bar 1',
    data: [
      { quarter: 1, earnings: 13000 },
      { quarter: 2, earnings: 16500 },
      { quarter: 3, earnings: 14250 },
      { quarter: 4, earnings: 19000 },
    ],
  },
  {
    id: 'chart_2',
    title: 'Bar 2',
    data: [
      { quarter: 1, earnings: 13000 },
      { quarter: 2, earnings: 16500 },
      { quarter: 3, earnings: 14250 },
      { quarter: 4, earnings: 19000 },
    ],
  },
];
